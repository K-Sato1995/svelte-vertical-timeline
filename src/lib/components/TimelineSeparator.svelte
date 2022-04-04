<script lang="ts">
	export let style: string = null;
</script>

<div class="timeline-separator" {style}>
	<slot />
</div>

<style>
	.timeline-separator {
		display: flex;
		flex-direction: column;
		flex: 0;
		align-items: center;
	}
</style>
