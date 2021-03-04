<template>
	<div>
		<div class="flex flex-col justify-between h-screen text-center">
			<header>
				<supra-navigation />
			</header>
			<div
				class="container flex flex-col gap-4 items-center max-w-screen-md mx-auto"
			>
				<h1 class="font-bold text-6xl">
					A transparent
					<span class="text-blue-600">technology</span> channel that
					connect with their audience
				</h1>
				<span class="text-2xl">with 1.23M suscribers</span>
				<nuxt-link
					to="/"
					class="bg-primary font-semibold px-8 py-4 rounded-md text-white"
					>View on YouTube</nuxt-link
				>
			</div>
			<nuxt-link to="/" class="flex gap-2 items-center p-4 mx-auto">
				<i class="bi-arrow-down text-2xl"></i>
				Scroll down to see more
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'SupraPixel',
		}
	},
}
</script>
