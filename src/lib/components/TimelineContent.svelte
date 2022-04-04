<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types';

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class={`timeline-content ${itemPosition}`}>
	<slot />
</div>

<style>
	.timeline-content {
		margin: 0;
		flex: 1;
		border: solid 1px;
		margin: 6px 16px;
	}

	.left {
		text-align: right;
	}

	.right {
		text-align: left;
	}
</style>
