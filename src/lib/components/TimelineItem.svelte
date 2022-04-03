<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types';

	export let position: ParentPosition | null;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);

	const itemStyle = `
    ${itemPosition === 'left' ? 'flex-direction: row-reverse;' : 'flex-direction: row;'}
  `;
</script>

<li class="timeline-item" style={itemStyle}>
	<!-- <h1>itemPos: {itemPosition}</h1> -->
	<slot />
</li>

<style>
	.timeline-item {
		list-style: none;
		display: flex;
		position: relative;
		min-height: 70px;
		text-align: right;
	}
	.timeline-item::before {
		content: '';
		border: solid 1px red;
		flex: 1;
		margin: 6px 16px;
		/* padding: 6px 16px, */
	}
</style>
