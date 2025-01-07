/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01abda",
        equiprGray: "#f4f4f4",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '480px', // Custom extra small breakpoint
        'sm': '640px', // Custom small breakpoint
        'md': '768px', // Custom medium breakpoint
        'lg': '1024px', // Custom large breakpoint
        'xl': '1280px', // Custom extra large breakpoint
        '2xl': '1536px', // Custom extra large breakpoint
        '3xl': '1600px', // Custom large breakpoint
      },
    },
  },
  plugins: [

  ],
}

