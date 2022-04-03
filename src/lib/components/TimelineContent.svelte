<script lang="ts">
	import { getContext } from 'svelte';

	const config = getContext('TimelineConfig');
</script>

<div class="timeline-content">
	<slot />
</div>

<style>
	.timeline-content {
		margin: 0;
		flex: 1;
		padding: 6px 16px;
		height: 150px;
		/* Or right */
		text-align: left;
		/* text-align: right; */
	}
</style>
