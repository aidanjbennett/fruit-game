<script lang="ts">
	export let link: string = '';
	export let text: string = '';
</script>

<a
	href={link}
	class="rounded bg-black px-4 py-2 font-bold text-white hover:text-red-500 hover:underline"
	>{text}
</a>
