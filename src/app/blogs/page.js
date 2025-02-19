import Link from 'next/link'

import Image from 'next/image'

import { urlFor } from '@/lib/imageUrl'

import { fetchData } from '@/lib/fetch'

import { POSTS_QUERY } from '@/queries/queries'



export async function generateMetadata() {



	return {

		title: "Latest Blogs",

		description: "Read now Panalobet's latest blogs.",

		robots: {

			index: true, 

			follow: true,

		},

		alternates: {

            canonical: "https://panalobetofficial.com/blogs",
			"msvalidate.01": '75A513BE09DD1B3EBAF879C3F32F0115' 

        },

	};

}





export const revalidate = 5;



export default async function BlogIndex() {



		const posts = await fetchData(POSTS_QUERY);



	 const jsonLd = {

			'@context': 'https://schema.org',

			'@type': 'CollectionPage',

			name: 'Panalobet Blog',

			description: "Read now Panalobet's blogs.",

			url: 'https://panalobetofficial.com/blogs',

			hasPart: posts.map((post) => ({

				'@type': 'BlogPosting',

				headline: post?.title,

				description: post?.description,

				datePublished: post?.publishedAt,

				image:

					post?.featuredImage &&

					urlFor(post.featuredImage).format('webp').url(),

				url: `https://panalobetofficial.com/blogs/${post?.slug?.current}`,

			})),

		};





	return (

		<>

			{/* Add JSON-LD to your page */}

			<script

				type="application/ld+json"

				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}

			/>

			{/* ... */}



			<main className="blog-main container mx-auto ">

				<h1 className="">Blogs</h1>

				<ul className="blog-card-container">

					{posts.length === 0 ? (

						<p>No blog posts available.</p>

					) : (

						posts.map((post, index) => {

							const aboveFold = index < 1;



							return (

								<Link

									href={`/blogs/${post?.slug?.current}`}

									key={post?._id}

									className="blog-card"

								>

									<li className="blog-card-inner">

										<figure className="blog-card-image-wrapper">

											<Image

												

												src={post?.featuredImage?.asset?.url}

										

												alt={post?.title}

												width={400} // Fallback dimensions

												height={400}

												quality={100} // Maximum quality

												priority={aboveFold} // Preload if above the fold

												loading={aboveFold ? undefined : 'lazy'}

												className="blog-card-image"

												sizes="(max-width: 500px) 400px, (max-width: 768px) 600px(max-width: 1200px) 50vw, 400px"

											/>

										</figure>



										<h2 className="blog-card-title">{post?.title}</h2>

										<small className="blog-card-publish">

											{new Date(post?.publishedAt).toLocaleDateString()}

										</small>

										<p className="blog-card-description">{post?.description}</p>

									</li>

								</Link>

							);

						})

					)}

				</ul>

			</main>

		</>

	);

}





