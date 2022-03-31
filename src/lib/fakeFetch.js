export function fakeFetch() {
	return new Promise((resolve) => setTimeout(() => resolve({ data: 'MY FAKE API DATA' }), 3000));
}
