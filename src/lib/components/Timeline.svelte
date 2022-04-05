<script lang="ts">
	import { setContext } from 'svelte';
	import type { TimelinePosition, TimelineConfig } from '../types';
	export let position: TimelinePosition = 'right';
	export let style: string = null;

	setContext<TimelineConfig>('TimelineConfig', { rootPosition: position });
</script>

<ul class="timeline" {style}>
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
