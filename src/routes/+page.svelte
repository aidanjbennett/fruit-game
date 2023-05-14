<script>
	import Button from '../components/Button.svelte';
	import Apple from '../assets/apple.jpg';
</script>

<svelte:head>
	<title>Home | Fruit Guessing Game</title>
</svelte:head>

<h1 class="pb-10 text-center text-2xl font-bold">Fruit Guessing Game</h1>

<div class="items-center md:flex md:justify-between">
	<div class="text-center">
		<div class="pb-5">
			<Button text="Game" link="/game" />
		</div>
		<div class="pb-5">
			<Button text="Help" link="/help" />
		</div>
		<div class="pb-5">
			<Button text="Credits" link="/credits" />
		</div>
	</div>
	<img
		class="shadow-red-96 rounded-md shadow-2xl"
		src={Apple}
		alt="apple looking good"
		width="740"
	/>
</div>
