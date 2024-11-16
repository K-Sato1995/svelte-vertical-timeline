<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import TimelineSeparator from '$lib/components/TimelineSeparator.svelte';
	import TimelineDot from '$lib/components/TimelineDot.svelte';
	import TimelineConnector from '$lib/components/TimelineConnector.svelte';
	import TimelineContent from '$lib/components/TimelineContent.svelte';
	import TimelineOppositeContent from '../lib/components/TimelineOppositeContent.svelte';

	const colors = {
		first: '#7CD5E2',
		second: '#FEC048',
		third: '#DD84C1',
		forth: '#FB6958'
	};

	const items = [
		{
			year: '1950s',
			title: 'The first ever WAN',
			description: 'The first known WAN was created by the U.S. Air Force.',
			color: colors.first
		},
		{
			year: '1969',
			title: 'First online message',
			description: 'The first online message was sent.',
			color: colors.second
		},
		{
			year: '1971',
			title: 'First Email',
			description: 'The first network email was sent by computer engineer Ray Tomlinson.',
			color: colors.third
		},
		{
			year: '1991',
			title: 'First WebPage',
			description: 'The first web page went live.',
			color: colors.forth
		},

		{
			year: '1995',
			title: 'Amazon Launch',
			description: 'Amazon was founded by Jeff Bezos from his garage.',
			color: colors.first
		},
		{
			year: '1998',
			title: 'Google Launch',
			description: 'Google was founded by Sergey Brin and Larry Page.',
			color: colors.second
		},
		{
			year: '2004',
			title: 'Facebook Launch',
			description: 'A Harvard sophomore named Mark Zuckerberg launches The Facebook.',
			color: colors.third
		},
		{
			year: '2022',
			title: '5 billion internet users',
			description: 'More than 5 billion internet users around the globe.',
			color: colors.forth
		}
	];
</script>

<Timeline
	position="alternate"
	style={`
  border-radius: 3%;
  padding: 1rem;
  `}
>
	{#each items as item}
		<TimelineItem>
			<!-- @migration-task: migrate this slot by hand, `opposite-content` is an invalid identifier -->
	<TimelineOppositeContent slot="opposite-content">
				<p class="oposite-content-title">{item.year}</p>
			</TimelineOppositeContent>

			<TimelineSeparator>
				<TimelineDot style={`background-color: ${item.color}; border-color: #fff;`} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 class="content-title">{item.title}</h3>
				<p class="content-description">{item.description}</p>
			</TimelineContent>
		</TimelineItem>
	{/each}
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
		margin-top: 1rem;
		color: #d1d3dd;
		font-weight: lighter;
		padding: 0.5rem 0;
	}
</style>
