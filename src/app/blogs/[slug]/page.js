import { client } from '@/lib/sanityClient';
import style from '@/styles/blogPage.module.css';
import Link from 'next/link';
import { OtherBlogs } from '@/app/components/OtherBlogs';
import { TableOfContents } from '@/app/components/TableOfContents';
import { BlogBody } from '@/app/components/BlogBody';
import { fetchSlug } from '@/lib/fetchSlug';
import { formatDate } from '@/utils/dateFormatter';
import { POST_CURRENT_OTHER_QUERY } from '@/queries/queries';



// Your function with caching
export async function generateStaticParams() {
	const query = '*[_type == $type]{ slug }';
	const params = { type: 'Post' };

	try {
		const posts = await client.fetch(query, params);

		// Validate posts data structure
		if (!Array.isArray(posts) || !posts.every((post) => post.slug?.current)) {
			throw new Error('Invalid posts data structure');
		}

		// Generate paths for each post
		return posts.map((post) => ({ slug: post.slug.current }));
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
}


//enable ISR with a revalidation interval of 5 seconds
export const revalidate = 5;

export async function generateMetadata({ params }) {
	const { slug } = await params;

	const blog = await fetchSlug(slug, POST_CURRENT_OTHER_QUERY);
	
	const currentPost = blog?.data?.currentPost ?? {};
	
	return {
		title: currentPost.title || 'Blog',
		description: currentPost.description || '',
		robots: {
			index: true, 
			follow: true,
		},
		alternates: {
            canonical: `https://panalobetofficial.com/blogs/${slug}`, 
        },
		openGraph: {
			title: currentPost.title || 'Blog',
			description: currentPost.description || '',
			url: `https://panalobetofficial.com/blogs/${slug}`,
			images: currentPost?.featuredImage?.asset?.url,
		},
		twitter: {
			card: 'summary_large_image',
			title: currentPost.title || 'Blog',
			description: currentPost.description || '',
			images: currentPost?.featuredImage?.asset?.url,
		},
	};
}

const BlogPostPage = async ({ params }) => {
	const { slug } = await params;

	const blog = await fetchSlug(slug, POST_CURRENT_OTHER_QUERY);

	const { currentPost, otherBlogs } = blog.data;



	 const jsonLd = {
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `https://panalobetofficial.com/blogs/${slug}`, // Ensure the URL is dynamic
			},
			headline: currentPost.title,
			description: currentPost.description,
			author: {
				'@type': 'Organization',
				name: 'Panalobet',
				url: 'https://panalobetofficial.com',
				logo: {
					'@type': 'ImageObject',
					url: 'https://panalobetofficial.com/images/panalobet-logo.png',
				},
			},
			publisher: {
				'@type': 'Organization',
				name: 'Panalobet',
				logo: {
					'@type': 'ImageObject',
					url: 'https://panalobetofficial.com/images/panalobet-logo.png',
				},
			},
			datePublished: new Date(currentPost.publishedAt).toISOString(),
			image: currentPost?.featuredImage?.asset?.url,
			articleBody: currentPost.description,
		};

	return (
		<>
			{/* Add JSON-LD to your page */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{/* ... */}
			<main className={`${style['blog-page']}`}>
				<section
					className={`${style['dark-blue']} ${style['blog-title']} container`}
				>	
					<p>
						<Link href="/">Home</Link>{' '}
						<span>/</span> <Link href="/blogs">Blogs</Link>
					</p>

					<h1 className="text-yellow">{currentPost?.title}</h1>

					<small className={style['blog-publish']}>
						{formatDate(currentPost?.publishedAt)}
					</small>
				</section>

				<section className={`${style['main-content']} container`}>
					<TableOfContents currentPost={currentPost} />
					<article className={style['blog-body']}>
						<BlogBody currentPost={currentPost} />
						<OtherBlogs otherBlogs={otherBlogs} />
					</article>
				</section>
			</main>
		</>
	);
};

export default BlogPostPage;
