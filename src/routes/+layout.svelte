<script lang="ts">
	import { browser } from '$app/environment';
	import { Navbar, Footer } from '$lib/components';
	import { darkMode } from '$lib/utils/stores';
	import '../app.css';

	$darkMode = browser && document.documentElement.getAttribute('data-theme') === 'dark';
</script>

<div class="flex flex-col w-full h-screen dark:text-gray-100 text-black">
	<Navbar />
	<div class="flex flex-col flex-grow dark:bg-slate-900 bg-gray-100">
		<slot />
	</div>
	<Footer />
</div>
