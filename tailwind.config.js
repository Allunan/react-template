/** @type {import('tailwindcss').Config} */
import { span } from "./src/lib/tailwindcss/index.ts"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        ...span()
      }
    }
  },
  plugins: []
}
