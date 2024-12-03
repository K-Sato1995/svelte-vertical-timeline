<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types';

	export let position: ParentPosition | null = null;
	export let style: string = null;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);
</script>

<!--<div class={`timeline-item ${itemPosition}`} {style}>-->
{#if !$$slots['opposite-content']}
	<div class="timeline-opposite-content" />
{:else}
	<slot name="opposite-content" />
{/if}
<slot />

<!--</div>-->

<style>
	/*:global(.timeline-content:nth-of-type(even)) {
		grid-column-start: 1;
		text-align: right;
	}
	:global(.alternate:nth-of-type(odd) > .timeline-content) {
		grid-column-start: 3;
	}

	:global(.alternate:nth-of-type(even) > .timeline-opposite-content) {
		grid-column-start: 1;
	}
	:global(.alternate:nth-of-type(odd) > .timeline-opposite-content) {
		grid-column-start: 3;
		text-align: right;
	}*/

	.timeline-opposite-content {
		margin: 6px 16px;
	}

	.timeline-item {
		list-style: none;
		display: flex;
		position: relative;
		min-height: 70px;
		width: max-content;
	}

	.left {
		flex-direction: row-reverse;
	}

	.right {
		flex-direction: row;
	}

	.alternate:nth-of-type(even) {
	}

	.alternate:nth-of-type(odd) {
	}
</style>
