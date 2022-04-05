# svelte-vertical-timeline

![image](https://user-images.githubusercontent.com/32632542/161654928-d2d16ca2-ace5-48b7-bef4-e58d7e09109e.png)

Check out the [demo](https://svelte-vertical-timeline.vercel.app/).

## Installation

```
yarn add svelte-vertical-timeline
```

or

```
npm install svelte-vertical-timeline
```

## Usage

### Basic Timeline

![image](https://user-images.githubusercontent.com/32632542/161697936-01666c94-927a-4ad4-8d4b-7ce1026db6fb.png)


<details><summary>CODE</summary>
<p>

```svelte
<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [{ title: 'Eat' }, { title: 'Sleep' }, { title: 'Code' }];
</script>

<Timeline>
	{#each options as option}
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
```
</p>
</details>

## API

### Timeline

### TimelineItem

### TimelineSeparator

### TimelineDot

### TimelineConnector

### TimelineContent

### TimelineOppositeContent
