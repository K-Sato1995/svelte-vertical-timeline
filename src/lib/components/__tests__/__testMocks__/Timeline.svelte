<script>
	import Timeline from '../../Timeline.svelte';
	import TimelineItem from '../../TimelineItem.svelte';
	import TimelineSeparator from '../../TimelineSeparator.svelte';
	import TimelineDot from '../../TimelineDot.svelte';
	import TimelineConnector from '../../TimelineConnector.svelte';
	import TimelineContent from '../../TimelineContent.svelte';
	import TimelineOppositeContent from '../../TimelineOppositeContent.svelte';

	export let options;
</script>

<Timeline position={options.position}>
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">{options.oppositeContent}</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3 class="content-title">{options.title}</h3>
			<p class="content-description">{options.description}</p>
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	h3 {
		margin: 0;
		padding: 0;
	}
	p {
		margin: 0;
		padding: 0;
	}
</style>
