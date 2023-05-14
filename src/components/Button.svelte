<script lang="ts">
	export let link: string = '';
	export let text: string = '';
</script>

<a
	href={link}
	class="rounded-md bg-black px-10 py-2 align-middle text-lg font-bold text-white hover:text-red-500 hover:underline"
>
	{text}
</a>
