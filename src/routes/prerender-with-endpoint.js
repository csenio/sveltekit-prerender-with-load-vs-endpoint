import { fakeFetch } from '$lib/fakeFetch';

export async function get() {
	const { data } = await fakeFetch();
	return {
		body: { data }
	};
}
