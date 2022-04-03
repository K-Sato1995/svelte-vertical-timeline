<script lang="ts">
	import { setContext } from 'svelte';
	import type { TimelinePosition, TimelineConfig } from '../types';
	export let position: TimelinePosition = 'right';

	setContext<TimelineConfig>('TimelineConfig', { rootPosition: position });
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
