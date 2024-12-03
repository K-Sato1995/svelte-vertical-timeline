<script lang="ts">
	import { setContext } from 'svelte';
	import type { TimelinePosition, TimelineConfig } from '../types';
	interface Props {
		position?: TimelinePosition;
		center?: boolean;
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { position = 'right', center = true, style = null, children }: Props = $props();

	setContext<TimelineConfig>('TimelineConfig', { rootPosition: position, center: center });
</script>

<div class={`timeline center-${center}`} {style}>
	{@render children?.()}
</div>

<style>
	.timeline {
		display: grid;
		grid-auto-rows: minmax(70px, auto);
		grid-auto-flow: row dense;
		padding: 6px 16px;
		flex-grow: 1;
	}

	.center-true {
		grid-template-columns: 1fr min-content 1fr;
	}
	.center-false {
		grid-template-columns: auto min-content auto;
	}
</style>
