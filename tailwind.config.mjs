/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#27e' // 4c0cfc, 1d4ed8, 2563eb
			},
			padding: {
				sm: "2rem",
				lg: "4rem"
			},
			margin: {
				sm: "2rem",
				lg: "4rem"
			},
		},
	},
	plugins: [],
}
