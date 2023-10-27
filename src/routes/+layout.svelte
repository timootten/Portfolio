<script>
	import { Navbar } from '$lib/components';
	import '../app.css';
</script>

<div class="w-screen h-screen dark:bg-slate-900 dark:text-gray-100 bg-gray-400 text-black">
	<Navbar />
	<div class="w-full h-full">
		<slot />
	</div>
</div>
