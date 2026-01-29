export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{css,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        "primary-dark": "#b8952b",
        "primary-muted": "rgba(212, 175, 55, 0.2)",
        "background-light": "#0A0A0A",
        "background-dark": "#050505",
        "surface-dark": "#121212",
        "surface-accent": "#1A1A1A",
        "card-light": "#171717",
        "card-dark": "#171717",
        "text-main-light": "#E7E5E4",
        "text-main-dark": "#E7E5E4",
        "text-muted-light": "#A3A3A3",
        "text-muted-dark": "#737373",
        "border-dark": "#262626",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(to bottom right, #1a1a1a, #0a0a0a)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
