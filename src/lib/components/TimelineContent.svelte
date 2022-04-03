<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types';

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class="timeline-content">
	<h1>ParentPos: {itemPosition}</h1>
	<slot />
</div>

<style>
	.timeline-content {
		margin: 0;
		flex: 1;
		padding: 6px 16px;
		height: 150px;
		/* Or right */
		text-align: left;
		/* text-align: right; */
	}
</style>
