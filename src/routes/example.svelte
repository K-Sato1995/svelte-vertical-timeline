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
			<p class="oposite-content-title">1950s</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #7CD5E2; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 120px;'}>
			<h2 class="content-title">The first ever WAN</h2>
			<p class="content-description">The first known WAN was created by the U.S. Air Force.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">1969</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2 class="content-title">First online message</h2>
			<p class="content-description">The first online message was sent.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">1971</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #DD84C1; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 120px;'}>
			<h2 class="content-title">First Email</h2>
			<p class="content-description">
				The first network email was sent by computer engineer Ray Tomlinson.
			</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">1991</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #FB6958; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2 class="content-title">First WebPage</h2>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">1995</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #7DD5E0; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2 class="content-title">Amazon Launch</h2>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">1997</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2 class="content-title">Google Launch</h2>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p class="oposite-content-title">2004</p>
		</TimelineOppositeContent>

		<TimelineSeparator>
			<TimelineDot style={'background-color: #FB6958; border-color: #fff;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h2 class="content-title">Facebook Launch</h2>
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	.oposite-content-title {
		margin: 0;
		padding: 0;
	}
	.content-title {
		margin: 0;
		padding: 0;
	}

	.content-description {
		margin: 0;
		padding: 0;
		margin-top: 10px;
		color: #d1d3dd;
		font-weight: lighter;
	}
</style>
