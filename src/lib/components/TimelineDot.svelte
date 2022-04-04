<script lang="ts">
	export let style: string = null;
</script>

<span class="timeline-dot" {style}>
	<slot />
</span>

<style>
	.timeline-dot {
    background-color: #BDBDBD;
    border: solid 2px #BDBDBD;
		display: flex;
		align-self: baseline;
		padding: 4px;
		border-radius: 50%;
		margin: 11.5px 0;
	}
</style>
