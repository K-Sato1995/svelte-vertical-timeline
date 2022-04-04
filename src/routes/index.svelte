<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import TimelineSeparator from '$lib/components/TimelineSeparator.svelte';
	import TimelineDot from '$lib/components/TimelineDot.svelte';
	import TimelineConnector from '$lib/components/TimelineConnector.svelte';
	import TimelineContent from '$lib/components/TimelineContent.svelte';
	import TimelineOppositeContent from '../lib/components/TimelineOppositeContent.svelte';
</script>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<span>Oppsite content</span>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2>Ruby development Inc</h2>
			<p>This is a company</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<span>Oppsite content</span>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2>Ruby development Inc</h2>
			<p>This is a company</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2>Ruby development Inc</h2>
			<p>This is a company</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineSeparator>
			<TimelineDot />
		</TimelineSeparator>
		<TimelineContent>
			<h2>Ruby development Inc</h2>
			<!-- <p>This is a company</p> -->
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	h2 {
		margin: 0;
		padding: 0;
	}
</style>
