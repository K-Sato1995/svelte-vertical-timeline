<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types';

	export let position: ParentPosition | null = null;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);
</script>

{#if !$$slots['opposite-content']}
	<div class="timeline-opposite-content"></div>
{:else}
	<slot name="opposite-content" />
{/if}
<slot />

<style>
	.timeline-opposite-content {
		margin: 6px 16px;
	}
</style>
