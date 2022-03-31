<script>
import { navigating } from '$app/stores';
</script>

<ul>
  <li><a href="/">home</a></li>
  <li><a href="/prerender-with-load">Static but slow</a></li>
   <li><a href="/prerender-with-endpoint">Static but FAST</a></li>
</ul>

{#if $navigating}
navigating....
{/if}

<slot />