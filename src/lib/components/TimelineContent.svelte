<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types';
	interface Props {
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { style = null, children }: Props = $props();

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class={`timeline-content ${itemPosition}`} {style}>
	{@render children?.()}
</div>

<style>
	.timeline-content {
		margin: 0;
		margin: 6px 16px;
		width: fit-content;
	}

	.alternate:nth-child(odd of .timeline-content) {
		grid-column-start: 1;
		justify-self: end;
		text-align: right;
	}
	.alternate:nth-child(even of .timeline-content) {
		grid-column-start: 3;
		justify-self: start;
	}

	.left {
		grid-column-start: 1;
		justify-self: end;
		text-align: right;
	}

	.right {
		justify-self: start;
		text-align: left;
	}
</style>
