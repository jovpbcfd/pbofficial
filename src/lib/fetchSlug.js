

import { client } from '@/lib/sanityClient';

// const POST_QUERY = `{
//   "currentPost": *[_type == "Post" && slug.current == $slug][0] {
//     title,
//     body,
//     description,
//     publishedAt,
//     featuredImage {
//       alt,
//       asset->{
//         url
//       }
//     }
//   },
//   "otherBlogs": *[_type == "Post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
//     _id,
//     title,
//     description,
//     slug,
//     publishedAt,
//     featuredImage {
//       alt,
//       asset->{
//         url
//       }
//     }
//   }
// }`;

export const fetchSlug = async (slug, postQuery) => {


	if (typeof slug !== 'string') {
		console.error('Invalid slug format');
		return { success: false, data: null };
	}

	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 50000); 
		const blog = await client.fetch(postQuery, {
			slug,
			signal: controller.signal,
		});
		clearTimeout(timeoutId);
		return { success: true, data: blog };
	} catch (error) {
		console.error(`Error fetching post data for slug "${slug}":`, error);
		return { success: false, data: null };
	}
};



