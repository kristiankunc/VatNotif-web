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
					50: "#030d16",
					100: "#061b2d",
					200: "#0c365a",
					300: "#125087",
					400: "#186bb4",
					500: "#1f86e0",
					600: "#4b9ee7",
					700: "#78b6ed",
					800: "#a5cff3",
					900: "#d2e7f9",
					950: "#e9f3fc"
				},
				background: {
					50: "#020e18",
					100: "#041c2f",
					200: "#08375e",
					300: "#0b538e",
					400: "#0f6fbd",
					500: "#138aec",
					600: "#42a2f0",
					700: "#71b9f4",
					800: "#a1d0f7",
					900: "#d0e8fb",
					950: "#e7f3fd"
				},
				primary: {
					50: "#010f18",
					100: "#031d30",
					200: "#063b60",
					300: "#085891",
					400: "#0b75c1",
					500: "#0e92f1",
					600: "#3ea8f4",
					700: "#6ebef7",
					800: "#9fd4f9",
					900: "#cfe9fc",
					950: "#e7f4fe"
				},
				secondary: {
					50: "#050118",
					100: "#0a0330",
					200: "#150660",
					300: "#1f0891",
					400: "#290bc1",
					500: "#340ef1",
					600: "#5c3ef4",
					700: "#856ef7",
					800: "#ae9ff9",
					900: "#d6cffc",
					950: "#ebe7fe"
				},
				accent: {
					50: "#170315",
					100: "#2d062b",
					200: "#5b0b55",
					300: "#881180",
					400: "#b616ab",
					500: "#e31cd6",
					600: "#e949de",
					700: "#ee77e6",
					800: "#f4a4ee",
					900: "#f9d2f7",
					950: "#fce8fb"
				}
			}
		}
	},

	plugins: []
} as Config;
