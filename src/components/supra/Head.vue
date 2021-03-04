<template>
	<span v-if="false"></span>
</template>

<script>
export default {
	head() {
		const isDark = this.$colorMode.value === 'dark'
		return {
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: isDark ? '/favicon-dark.svg' : '/favicon.svg',
				},
				{
					rel: 'alternate icon',
					href: '/favicon.ico',
				},
				{
					rel: 'mask-icon',
					href: '/safari-pinned-tab.svg',
					color: '#272B36',
				},
			],
		}
	},
}
</script>
