export function formatDate(publishedAt) {
	if (!publishedAt) return 'Invalid date';


  const date = new Date(publishedAt);

	// Get the day, month (abbreviated), and year
	const day = date.getDate().toString().padStart(2, '0'); // Ensure the day is 2 digits (e.g., "09" instead of "9")
	const monthOptions = { month: 'short' }; // For abbreviated month name like "Oct"
	const month = date.toLocaleDateString('en-US', monthOptions);
	const year = date.getFullYear(); // Get the full year

	return `${day} ${month} ${year}`;
}
