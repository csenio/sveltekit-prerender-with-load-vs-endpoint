<script context="module">
  export const prerender = true
  import { fakeFetch } from "$lib/fakeFetch";

  export async function load(){
    const {data} = await fakeFetch();
    return ({
      props: {data}
    });
  }

</script>

<script>
  export let data
</script>

<h1>load data: {data}</h1>