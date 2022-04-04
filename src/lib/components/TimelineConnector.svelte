<script lang="ts">
	export let style: string = null;
</script>

<span class="timeline-connector" {style} />

<style>
	.timeline-connector {
		width: 2px;
		background-color: grey;
		flex-grow: 1;
	}
</style>
