<script>
	import { Navbar, Footer } from '$lib/components';
	import '../app.css';
</script>

<div class="flex flex-col w-full h-screen dark:text-gray-100 text-black">
	<Navbar />
	<div class="flex flex-col flex-grow dark:bg-slate-900 bg-gray-100">
		<slot />
	</div>
	<Footer />
</div>
