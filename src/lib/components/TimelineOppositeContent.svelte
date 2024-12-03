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

<div class={`timeline-opposite-content ${itemPosition}`} {style}>
	{@render children?.()}
</div>

<style>
	.timeline-opposite-content {
		margin: 0;
		margin-right: auto;
		margin: 6px 16px;
		width: fit-content;
	}

	.alternate:nth-child(odd of .timeline-opposite-content) {
		grid-column-start: 3;
		justify-self: start;
	}
	.alternate:nth-child(even of .timeline-opposite-content) {
		grid-column-start: 1;
		justify-self: end;
		text-align: right;
	}

	.alterate:nth-child(10n + 7) {
		border: 1px solid red;
	}

	.left {
		grid-column-start: 3;
		justify-self: start;
		text-align: left;
	}

	.right {
		justify-self: end;
		text-align: right;
	}
</style>
