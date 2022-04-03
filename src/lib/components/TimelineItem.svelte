<li class="timeline-item">
	<slot />
</li>

<style>
	.timeline-item {
		list-style: none;
		display: flex;
		position: relative;
		min-height: 70px;
		text-align: left;
		/* border: solid 1px blue; */
		/* Left */
		/* flex-direction: row-reverse; */
		/* Right */
		flex-direction: row;
	}
	.timeline-item::before {
		content: ' ';
		flex: 1;
	}
</style>
