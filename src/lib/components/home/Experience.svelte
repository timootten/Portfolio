<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import {
		IntellijIcon,
		VSCodeIcon,
		GitHubIcon,
		SvelteIcon,
		NextJSIcon,
		DebianIcon,
		ProxmoxIcon,
		WindowsIcon,
		ReactIcon,
		VueJSIcon
	} from '$lib/components/icons';
</script>

<section class="dark:bg-gray-900 bg-gray-100 flex flex-col items-center w-full" id="experience">
	<div class="container px-20 flex flex-col items-center py-12 md:py-16 md:flex-row">
		<div class="w-full text-center md:text-left">
			<h2 class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
				Meine Erfahrung
			</h2>
			<h4 class="pt-6 font-header text-xl font-medium sm:text-2xl md:text-3xl">
				Meine Erfahrungen mit verschiedenen Technologien
			</h4>
			<div class="mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<div>
					<div
						class="flex flex-row mb-4 justify-center md:justify-start rounded-full bg-primary-100 dark:bg-primary-900"
					>
						<a href="https://code.visualstudio.com/" target="_blank" class="mr-4"><VSCodeIcon /></a>
						<a href="https://www.jetbrains.com/" target="_blank" class="mr-4"><IntellijIcon /></a>
						<a href="https://www.github.com/" target="_blank" class="mr-4"><GitHubIcon /></a>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Code Managment</h3>
					<!--<p class="text-gray-500 dark:text-gray-400">
						Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
						your marketing goals every month with our marketing plan.
					</p>-->
				</div>
				<div class="mt-10">
					<div
						class="flex flex-row mb-4 justify-center md:justify-start rounded-full bg-primary-100 dark:bg-primary-900"
					>
						<a href="https://kit.svelte.dev/" target="_blank" class="mr-4"><SvelteIcon /></a>
						<a href="https://nextjs.org/" target="_blank" class="mr-4"><NextJSIcon /></a>
						<a href="https://react.dev/" target="_blank" class="mr-4"><ReactIcon /></a>
						<a href="https://vuejs.org/" target="_blank" class="mr-4"><VueJSIcon /></a>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Frameworks</h3>
					<!--<p class="text-gray-500 dark:text-gray-400">
						Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
						your marketing goals every month with our marketing plan.
					</p>-->
				</div>
				<div class="mt-10">
					<div
						class="flex flex-row mb-4 justify-center md:justify-start items-center rounded-full bg-primary-100 dark:bg-primary-900"
					>
						<a href="https://www.debian.org/" target="_blank" class="mr-4"><DebianIcon /></a>
						<a href="https://www.proxmox.com/" target="_blank" class="mr-4"><ProxmoxIcon /></a>
						<a href="https://www.microsoft.com/de-de/windows" target="_blank" class="mr-4"
							><WindowsIcon /></a
						>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">Betriebssysteme</h3>
					<!--<p class="text-gray-500 dark:text-gray-400">
						Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
						your marketing goals every month with our marketing plan.
					</p>-->
				</div>
			</div>
		</div>
	</div>
</section>
