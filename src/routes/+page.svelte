<script>
	import Button from '../components/Button.svelte';
</script>

<svelte:head>
	<title>Home | Fruit Guessing Game</title>
</svelte:head>
<div class="h-screen bg-gray-300">
	<h1 class="py-4 text-center text-2xl font-bold">Fruit Guessing Game</h1>
	<div class="flex justify-center space-x-4">
		<Button text="Game" link="/game" />
		<Button text="Help" link="/help" />
		<Button text="Credits" link="/credits" />
	</div>
</div>
