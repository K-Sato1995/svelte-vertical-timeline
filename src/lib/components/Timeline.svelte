<script lang="ts">
	import { setContext } from 'svelte';
	export let position: 'right' | 'left' = 'right';

	setContext('TimelineConfig', { position });
</script>

<ul class="timeline">
	<h1>{position}</h1>
	<slot />
</ul>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		padding: 6px 16px;
		flex-grow: 1;
	}
</style>
