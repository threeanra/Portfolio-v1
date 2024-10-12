/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			'montreal-bold': 'Montreal Bold',
  			'montreal-light': 'Montreal Light',
  			'montreal-medium': 'Montreal Medium',
  			'montreal-regular': 'Montreal Regular'
  		},
  		colors: {
  			transparent: 'transparent',
  			'background-color': '#E5E7DF',
  			'custom-black': '#252525',
  			'custom-black-2': '#141516',
  			'custom-gray': '#292929'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
