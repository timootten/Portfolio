<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<h1 class="pt-4 flex md:flex-row flex-col justify-evenly">
	<div class="flex flex-col justify-center -mt-0 md:-mt-40 md:pt-0 pt-16 items-center">
		<p class="text-2xl font-bold text-sky-600 mb-2">Hey 👋, ich bin</p>
		<p class="text-5xl mb-2">Timo Otten</p>
		<p class="text-2xl mb-3">Backend Developer</p>
		<div class="flex md:flex-row flex-col md:space-x-2 md:space-y-0 pace-x-0 space-y-2">
			<a class="btn w-36 btn-primary" href="mailto:timootten@icloud.com"
				><Fa icon={faEnvelope} /> Kontakt</a
			>
		</div>
	</div>
	<div class="flex flex-col items-center pt-8">
		<img src="/img/me2.png" width="300px" alt="Picture of me" />
	</div>
</h1>
