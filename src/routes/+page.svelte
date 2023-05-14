<script>
	import Button from '../components/Button.svelte';
</script>

<svelte:head>
	<title>Home | Fruit Guessing Game</title>
</svelte:head>
<div class="bg-gray-300 h-screen">
	<h1 class="text-center font-bold py-4 text-2xl">Fruit Guessing Game</h1>
	<div class="flex justify-center space-x-4">
		<Button text="Game" link="/game" />
		<Button text="Help" link="/help" />
		<Button text="Credits" link="/credits" />
	</div>
</div>
