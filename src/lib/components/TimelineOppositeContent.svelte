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
		flex: 1;
		margin-right: auto;
		margin: 6px 16px;
	}

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
	}
</style>
