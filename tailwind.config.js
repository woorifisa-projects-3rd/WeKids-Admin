/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main01: "#0167AB",
        main02: "#57A9FB",
        main03: "#32A2DB",
        main04: "#52B6E7",
      },
      fontSize: {
        "B-32": ["32px", { lineHeight: "normal", fontWeight: 700 }],
        "B-28": ["28px", { lineHeight: "normal", fontWeight: 700 }],
        "B-22": ["22px", { lineHeight: "normal", fontWeight: 700 }],
        "B-20": ["20px", { lineHeight: "normal", fontWeight: 700 }],
        "B-18": ["18px", { lineHeight: "normal", fontWeight: 700 }],
        "R-28": ["28px", { lineHeight: "normal", fontWeight: 400 }],
        "R-20": ["20px", { lineHeight: "normal", fontWeight: 400 }],
        "R-18": ["18px", { lineHeight: "normal", fontWeight: 400 }],
        "R-15": ["14px", { lineHeight: "normal", fontWeight: 400 }],
        "R-14": ["14px", { lineHeight: "normal", fontWeight: 400 }],
        "R-12": ["12px", { lineHeight: "normal", fontWeight: 400 }],
        "R-10": ["10px", { lineHeight: "normal", fontWeight: 400 }],
        "L-20": ["20px", { lineHeight: "normal", fontWeight: 300 }],
        "L-12": ["12px", { lineHeight: "normal", fontWeight: 300 }],
        "L-10": ["10px", { lineHeight: "normal", fontWeight: 300 }],
      },
      fontFamily: {
        "L-12": ["12px", { lineHeight: "normal", fontWeight: 300 }],
        "L-10": ["10px", { lineHeight: "normal", fontWeight: 300 }],
      },
      PretendardB: ["Pretendard-Bold", "sans-serif"],
      PretendardR: ["Pretendard-Regular", "sans-serif"],
      PretendardL: ["Pretendard-Light", "sans-serif"],
    },
  },
  plugins: [],
};
