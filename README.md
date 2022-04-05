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

## Basic Timeline

### Example

![image](https://user-images.githubusercontent.com/32632542/161697936-01666c94-927a-4ad4-8d4b-7ce1026db6fb.png)

### Code

```svelte
<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent
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


## Left positioned timeline

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
		TimelineContent
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

## Alternating timeline

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
		TimelineContent
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

## Opposite content
![image](https://user-images.githubusercontent.com/32632542/161708142-7de1ad8d-5ccc-479c-aa8b-f5dd95eddd56.png)

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

	const options = [
		{ title: 'Eat', time: '09:30 am' },
		{ title: 'Sleep', time: '10:00 am' },
		{ title: 'Code', time: '11:00 am' },
		{ title: 'Eat', time: '01:00 pm' }
	];
</script>

<Timeline position="alternate">
	{#each options as option}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p>{option.time}</p>
			</TimelineOppositeContent>
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


## Customization
![image](https://user-images.githubusercontent.com/32632542/161714247-19574e93-d9d1-4fef-bd39-e2271202d8e4.png)

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
</script>

<!-- Icons from: https://icons8.com/pricing -->
<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>09:30 am</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://img.icons8.com/nolan/64/taco.png" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 150px;'}>
			<h3>Eat</h3>
			<p>You need to eat.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>10:30 am</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3 style={'margin-top: -2px;'}>Sleep</h3>
			<p style={'margin-top: -2px;'}>You need to take a nap.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>11:00 am</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://img.icons8.com/doodle/48/000000/svetle.png" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>Code</h3>
			<p>Svelte is Awesome.</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>01:00 am</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 65px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="https://img.icons8.com/nolan/64/birthday-cake.png" />
			</TimelineDot>
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>Snack</h3>
			<p>You need to treat yourself.</p>
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	p {
		margin: px 0;
		color: grey;
	}
</style>
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
