import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			transitionProperty: {
				height: "height"
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				opensans: ["Open Sans", "sans-serif"]
			},
			colors: {
				text: {
					50: "#060e13",
					100: "#0d1c26",
					200: "#19394d",
					300: "#265573",
					400: "#337299",
					500: "#408ebf",
					600: "#66a5cc",
					700: "#8cbbd9",
					800: "#b3d2e6",
					900: "#d9e8f2",
					950: "#ecf4f9"
				},
				background: {
					50: "#060d13",
					100: "#0d1926",
					200: "#19334d",
					300: "#264c73",
					400: "#336699",
					500: "#407fbf",
					600: "#6699cc",
					700: "#8cb2d9",
					800: "#b3cce6",
					900: "#d9e6f2",
					950: "#ecf2f9"
				},
				primary: {
					50: "#070d13",
					100: "#0d1a26",
					200: "#1a354c",
					300: "#274f72",
					400: "#346998",
					500: "#4184be",
					600: "#679ccb",
					700: "#8db5d8",
					800: "#b3cee5",
					900: "#d9e6f2",
					950: "#ecf3f8"
				},
				secondary: {
					50: "#120713",
					100: "#230d26",
					200: "#461a4c",
					300: "#692772",
					400: "#8c3498",
					500: "#af41be",
					600: "#bf67cb",
					700: "#cf8dd8",
					800: "#dfb3e5",
					900: "#efd9f2",
					950: "#f7ecf8"
				},
				accent: {
					50: "#13070f",
					100: "#260d1e",
					200: "#4c1a3b",
					300: "#722759",
					400: "#983477",
					500: "#be4194",
					600: "#cb67aa",
					700: "#d88dbf",
					800: "#e5b3d4",
					900: "#f2d9ea",
					950: "#f8ecf4"
				}
			}
		}
	},

	plugins: []
} as Config;
