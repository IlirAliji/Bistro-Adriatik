/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3557",
        gold: "#C7A14A",
        cream: "#F6F4EF",
        ink: "#0F172A",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
