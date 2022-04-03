<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types';

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;

	const style = `
    ${itemPosition === 'left' ? 'text-align: right;' : 'text-align: left;'}
  `;
</script>

<div class="timeline-content" {style}>
	<slot />
</div>

<style>
	.timeline-content {
		margin: 0;
		flex: 1;
		/* border: solid 1px; */
		padding: 6px 16px;
		height: 150px;
	}
</style>
