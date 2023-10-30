<script>
	import Fa from 'svelte-fa';
	import { DarkModeButton } from '..';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	const title = "Timo's Portfolio";

	const menu = [
		{
			name: 'Über mich',
			href: '/#about'
		},
		{
			name: 'Meine Projekte',
			href: '/#projects'
		},
		{
			name: 'Tools',
			children: [
				{
					name: 'Passwort Generator',
					href: '/tools/password'
				}
			]
		}
	];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each menu as item}
					{#if item.children}
						<li>
							<a href={'#'}>{item.name}</a>
							<ul class="p-2">
								{#each item.children as children}
									<li><a href={children.href}>{children.name}</a></li>
								{/each}
							</ul>
						</li>
					{:else}
						<li><a href={item.href}>{item.name}</a></li>
					{/if}
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl btn-sm">{title}</a>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			{#each menu as item}
				{#if item.children}
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<li tabindex="0">
						<details>
							<summary>{item.name}</summary>
							<ul class="p-2">
								{#each item.children as children}
									<li><a class="whitespace-nowrap" href={children.href}>{children.name}</a></li>
								{/each}
							</ul>
						</details>
					</li>
				{:else}
					<li><a href={item.href}>{item.name}</a></li>
				{/if}
			{/each}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		</ul>
	</div>
	<div class="navbar-end">
		<DarkModeButton />
		<a class="ml-1 sm:ml-4 btn btn-primary" href="https://github.com/MirSowasVonEgal/Portfolio"
			><Fa icon={faGithub} /> GitHub</a
		>
	</div>
</div>
