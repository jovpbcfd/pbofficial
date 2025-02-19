import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/lib/imageUrl';
import style from '@/styles/blogPage.module.css';

const customComponents = {
	block: {
		h2: ({ children, value }) => {
			return <h2 id={value._key}>{children}</h2>;
		},
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset) {
				return <p>Image not found</p>; // Fallback if no image asset is available
			}
			const imageUrl = urlFor(value?.asset)?.width(900)
														.height(500).url(); // Use image URL builder

			return (
				<figure
					
					width="900"
					height="500"
				>
					<Image
						src={imageUrl}
						alt={value?.alt || 'Image'}
						title={value?.title || 'Image'}
						width={900}
						height={500} // Specify the height (aspect ratio)
						layout="intrinsic"
						quality={75}
						priority
					/>
				</figure>
			);
		},
		button: ({ value }) => (
			<button className={`${style['blog-body-cta']}`}>
				<a
					href={value?.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{value?.text}
				</a>
			</button>
		),
	},
};

export const BlogBody = ({ currentPost }) => {
	return (
		<>
			<figure
				
				width="900"
				height="500"
			>
				<Image
					src={currentPost?.featuredImage?.asset?.url}
					alt={currentPost?.featuredImage?.alt}
					title={currentPost?.featuredImage?.title}
					width={900}
					height={500} // Specify the height (aspect ratio)
					layout="intrinsic"
					quality={75}
					priority
				/>
			</figure>

			<article className={style['blog-body-contents']}>
				<PortableText
					value={currentPost?.body}
					components={customComponents}
				/>
			</article>
		</>
	);
};
