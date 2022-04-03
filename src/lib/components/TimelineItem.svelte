<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types';

	export let position: ParentPosition | null;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);
</script>

<li class="timeline-item">
	<h1>itemPos: {itemPosition}</h1>
	<slot />
</li>

<style>
	.timeline-item {
		list-style: none;
		display: flex;
		position: relative;
		min-height: 70px;
		text-align: left;
		/* border: solid 1px blue; */
		/* Left */
		/* flex-direction: row-reverse; */
		/* Right */
		flex-direction: row;
	}
	.timeline-item::before {
		content: ' ';
		flex: 1;
	}
</style>
