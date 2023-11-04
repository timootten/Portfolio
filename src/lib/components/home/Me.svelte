<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import { browser } from '$app/environment';
	import { darkMode } from '$lib/utils/stores';

	$: color = $darkMode ? '#ffffff' : '#000000';
	$: console.log(color);

	$: particlesConfig = {
		fullScreen: { enable: false },
		particles: {
			number: {
				value: 35,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: color
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 30,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: color,
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 2,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'window',
			events: {
				onhover: {
					enable: true,
					mode: 'repulse'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	} as any;

	let particlesInit = async (engine: any) => {
		await loadFull(engine);
	};
</script>

<div class="relative grow-h-screen pt-4 flex flex-grow md:flex-row flex-col justify-evenly z-10">
	<div class="flex flex-col justify-center md:-mt-40 md:pt-0 pt-16 items-center z-30">
		<p class="text-2xl font-bold text-sky-600 mb-2">Hey 👋, ich bin</p>
		<p class="text-5xl mb-2">Timo Otten</p>
		<p class="text-2xl mb-3">Full Stack Web Developer</p>
		<div class="flex md:flex-row flex-col md:space-x-2 md:space-y-0 pace-x-0 space-y-2">
			<a class="btn w-36 btn-primary" href="mailto:timootten@icloud.com"
				><Fa icon={faEnvelope} /> Kontakt</a
			>
		</div>
	</div>
	<div class="flex flex-col items-center pt-8">
		<img draggable="false" src="/img/me3.png" alt="Me" class="h-screen m-auto z-30" />
	</div>
	<div class="absolute bottom-0 right-0 z-20">
		<svg
			width="500"
			height="500"
			viewBox="0 0 491 490"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="356" cy="356" r="356" fill="url(#paint0_linear_6:37)" />
			<defs>
				<linearGradient
					id="paint0_linear_6:37"
					x1="356.5"
					y1="0"
					x2="356.5"
					y2="713"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#4A6CF7" />
					<stop offset="1" stop-color="#1E3BB3" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="absolute w-full h-full top-0 left-0 z-10">
		<Particles id="tsparticles" class="w-full h-full" options={particlesConfig} {particlesInit} />
	</div>
</div>
