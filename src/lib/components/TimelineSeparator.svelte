<script lang="ts">
	interface Props {
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { style = null, children }: Props = $props();
</script>

<div class="timeline-separator" {style}>
	{@render children?.()}
</div>

<style>
	.timeline-separator {
		display: flex;
		flex-direction: column;
		flex: 0;
		align-items: center;
	}
</style>
