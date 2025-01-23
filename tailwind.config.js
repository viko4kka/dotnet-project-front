/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBgColor: "#2C2638",
				secondWhite: "#ddd",
				inputBgColor: "#3C364C",
				bgColorButtton: "#43378F",
				bgColorButttonHover: "#4D429E",
				buttonLogOut: "#FF4040"
			},
		},
	},
	plugins: [],
};
