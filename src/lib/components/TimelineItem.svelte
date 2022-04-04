<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types';

	export let position: ParentPosition | null;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);
</script>

<li class={`timeline-item ${itemPosition}`}>
	<slot />
</li>

<style>
	.timeline-item {
		list-style: none;
		display: flex;
		position: relative;
		min-height: 70px;
	}

	.timeline-item::before {
		content: '';
		border: solid 1px red;
		flex: 1;
		margin: 6px 16px;
	}

	.left {
		flex-direction: row-reverse;
	}

	.right {
		flex-direction: row;
	}

	.alternate:nth-of-type(even) {
		flex-direction: row-reverse;
	}

	.alternate:nth-of-type(odd) {
		flex-direction: row;
	}

	:global(.alternate:nth-of-type(even) > .timeline-content) {
		text-align: right;
	}
</style>
