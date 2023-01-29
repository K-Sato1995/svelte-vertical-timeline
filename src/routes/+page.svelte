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

<div class="footer" />

<style>
	.header {
		height: 120px;
		color: var(--main-color);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header__title {
		font-size: 1.6rem;
	}
	.main {
		margin-top: 1rem;
		max-width: 768px;
		margin: 0 auto;
	}
	.footer {
		height: 120px;
	}
</style>
