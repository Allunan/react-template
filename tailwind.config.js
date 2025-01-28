/** @type {import('tailwindcss').Config} */
import {
  gap,
  height,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  width
} from "./src/lib/tailwindcss/index.ts"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: width(),
      minWidth: minWidth(),
      maxWidth: maxWidth(),

      height: height(),
      minHeight: minHeight(),
      maxHeight: maxHeight(),

      gap: gap(),
      padding: padding(),
      margin: margin()
    }
  },
  plugins: []
}
