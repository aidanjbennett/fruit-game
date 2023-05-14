<script>
	import Button from '../../components/Button.svelte';
	import Apple from '../../assets/apple.jpg';
	import HowToPlay from '../../components/HowToPlay.svelte';
</script>

<svelte:head>
	<title>Help | Fruit Guessing Game</title>
</svelte:head>
<div class="bg-gray-300 h-screen pt-10 px-10">
	<div class="flex">
		<h1 class="text-center font-bold text-2xl pr-10">Fruit Guessing Game</h1>
		<Button text="Main Menu" link="/" />
	</div>
	<div class="flex">
		<div>
			<p class="text-lm">
				Fruit Guessing Game is a game to guess different types of fruit to encourage healthy eating.
			</p>
			<HowToPlay />
		</div>
		<img
			class="ml-10 rounded-md shadow-2xl shadow-red-500"
			src={Apple}
			alt="apple looking good"
			width="500"
		/>
	</div>
</div>
