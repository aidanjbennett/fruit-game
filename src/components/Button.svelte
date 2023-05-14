<script lang="ts">
	export let link: string = '';
	export let text: string = '';
</script>

<a
	href={link}
	class="bg-black text-white font-bold py-2 px-4 rounded hover:underline hover:text-red-500"
	>{text}
</a>
