<script>
	import { Navbar } from '$lib/components';
	import '../app.css';
</script>

<div
	class="flex flex-col w-full h-screen dark:bg-slate-900 dark:text-gray-100 bg-gray-200 text-black"
>
	<Navbar />
	<div class="flex flex-grow">
		<slot />
	</div>
</div>
