<script>
	import Button from '../../components/Button.svelte';
	import Apple from '../../assets/apple.jpg';
	import HowToPlay from '../../components/HowToPlay.svelte';
</script>

<svelte:head>
	<title>Help | Fruit Guessing Game</title>
</svelte:head>

<!--Nav-->
<div class="items-center pb-10 md:flex md:justify-between">
	<a href="/">
		<h1 class="pb-4 text-2xl font-bold hover:underline md:pr-10 md:text-center">
			Fruit Guessing Game
		</h1>
	</a>
	<Button text="Play" link="/game" />
</div>
<!--Content-->
<div class="flex">
	<div>
		<h2 class="text-xl font-medium underline">About</h2>
		<p class="text-lm">
			Fruit Guessing Game is a game to guess different types of fruit to encourage healthy eating.
		</p>
		<HowToPlay />
	</div>

	<div class="md:pt-10">
		<img
			class="hidden rounded-md shadow-2xl shadow-red-500 md:ml-10 md:block"
			src={Apple}
			alt="apple looking good"
			width="500"
		/>
	</div>
</div>
