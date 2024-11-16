<script lang="ts">
	interface Props {
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { style = null, children }: Props = $props();
</script>

<span class="timeline-dot" {style}>
	{@render children?.()}
</span>

<style>
	.timeline-dot {
		background-color: #121212;
		border: solid 2px #121212;
		display: flex;
		align-self: baseline;
		padding: 4px;
		border-radius: 50%;
		margin: 11.5px 0;
	}
</style>
