<script lang="ts">
	import Apple from '../../assets/apple.jpg';
	import Button from '../../components/Button.svelte';
</script>

<div class="flex justify-between">
	<h1 class="text-center text-2xl font-bold">Credits</h1>
	<Button text="Main Menu" link="/" />
</div>
<div class="pt-10 md:flex">
	<div>
		<h2 class="text-xl font-medium">Images / Assets used in the site</h2>

		<ul class="ml-4 list-disc">
			<li>
				<a href="https://unsplash.com/@priscilladupreez" class="hover:underline"
					>Priscilla Du Preez</a
				>
				for the
				<a href="https://unsplash.com/photos/CoqJGsFVJtM" class="hover:underline">apple image</a> on
				unsplash
			</li>
		</ul>
	</div>
	<div class="pl-96 pr-10">
		<img src={Apple} alt="" class="rounded-md shadow-2xl shadow-red-500" width="740" />
	</div>
</div>
