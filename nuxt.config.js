export default {
	target: 'static',
	srcDir: 'src',
	components: true,
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
			Inter: [400, 500, 700],
		},
	},
}
