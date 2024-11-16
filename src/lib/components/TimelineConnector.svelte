<script lang="ts">
	interface Props {
		style?: string;
	}

	let { style = null }: Props = $props();
</script>

<span class="timeline-connector" {style}></span>

<style>
	.timeline-connector {
		width: 2px;
		background-color: #bdbdbd;
		flex-grow: 1;
	}
</style>
