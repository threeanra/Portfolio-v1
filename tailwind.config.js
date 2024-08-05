/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montreal-bold": "Montreal Bold",
        "montreal-light": "Montreal Light",
        "montreal-medium": "Montreal Medium",
        "montreal-regular": "Montreal Regular",
      },
      colors: {
        transparent: "transparent",
        "background-color": "#EBEBEB",
        "custom-black": "#252525",
        "custom-black-2": "#141516",
        "custom-gray": "#292929",
      },
    },
  },
  plugins: [],
};
