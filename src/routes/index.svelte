<script>
	import '../global.css';
	import Example from './example.svelte';
</script>

<div class="header"><h1 class="header__title">svelte-vertical-timeline</h1></div>

<div class="main">
	<div class="example-container">
		<Example />
	</div>
</div>

<style>
	.header {
		height: 50px;
		color: var(--main-color);
		/* border-bottom: solid 1px var(--main-color); */
		text-align: center;
	}
	.header__title {
		font-size: 1.4rem;
	}
	.main {
		/* border: solid 1px #fff; */
		margin-top: 1rem;
		max-width: 768px;
		margin: 0 auto;
	}
	.example-container {
		/* border: solid red 1px; */
		/* border-radius: 10%; */
	}
</style>
