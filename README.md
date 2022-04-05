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

### Left positioned timeline

![image](https://user-images.githubusercontent.com/32632542/161698883-4b22f3c9-42af-414d-a5f0-0a3141b410eb.png)


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
	} from 'svelte-vertical-timeline';

	const options = [{ title: 'Eat' }, { title: 'Sleep' }, { title: 'Code' }];
</script>

<Timeline position="left">
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

### Alternating timeline

![image](https://user-images.githubusercontent.com/32632542/161699086-507b75dd-c295-4a2e-9215-e46bf5d05477.png)

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
	} from 'svelte-vertical-timeline';

	const options = [{ title: 'Eat' }, { title: 'Sleep' }, { title: 'Code' }];
</script>

<Timeline position="alternate">
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

### Opposite content

### Customization

## API

### Timeline

### TimelineItem

### TimelineSeparator

### TimelineDot

### TimelineConnector

### TimelineContent

### TimelineOppositeContent
