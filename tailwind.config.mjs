/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: '#DCD7C9', // 4c0cfc, 1d4ed8, 2563eb, 27e
				dark: "#384341",
				accent: "#D36336" // D36336, AB4E52
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
