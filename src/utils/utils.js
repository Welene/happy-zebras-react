export async function checkImageExists(url) {
	if (!url || url === 'N/A' || !url.startsWith('http')) {
		console.log('Invalid URL:', url);
		return '../src/assets/missing-poster.svg';
	}

	try {
		const response = await fetch(url, { method: 'HEAD' });
		if (!response.ok) {
			throw new Error(`Image not found, status: ${response.status}`);
		}

		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.startsWith('image/')) {
			throw new Error('Response is not an image');
		}

		return url;
	} catch (error) {
		console.log('Error:', error.message);
		return '../src/assets/missing-poster.svg'; // Fallback-bild missing-poster.svg
	}
}
