import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Material Design colors
        primary: {
          DEFAULT: "#1976D2",
          dark: "#1565C0",
          light: "#42A5F5",
        },
        secondary: {
          DEFAULT: "#9C27B0",
          dark: "#7B1FA2",
          light: "#BA68C8",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#121212",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1E1E1E",
        },
        error: {
          DEFAULT: "#D32F2F",
          dark: "#C62828",
          light: "#EF5350",
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)",
          "primary-dark": "rgba(255, 255, 255, 0.87)",
          "secondary-dark": "rgba(255, 255, 255, 0.6)",
          "disabled-dark": "rgba(255, 255, 255, 0.38)",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;