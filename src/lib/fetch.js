import { client } from '@/lib/sanityClient';

export async function fetchData(query) {

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 50000); 

	try {
		const result = await client.fetch(query, { signal: controller.signal });
		console.log('Successfully fetched data:');
		return result;
	} catch (error) {
		console.error(`Error fetching data with query "${query}":`, error);
		return []; // Default to an empty array
	} finally {
		clearTimeout(timeoutId);
	}
}
