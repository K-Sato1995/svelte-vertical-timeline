<script lang="ts">
	import { setContext } from 'svelte';
	import type { TimelinePosition, TimelineConfig } from '../types';
	interface Props {
		position?: TimelinePosition;
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { position = 'right', style = null, children }: Props = $props();

	setContext<TimelineConfig>('TimelineConfig', { rootPosition: position });
</script>

<ul class="timeline" {style}>
	{@render children?.()}
</ul>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		padding: 6px 16px;
		flex-grow: 1;
	}
</style>
