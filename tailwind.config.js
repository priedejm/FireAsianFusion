import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C"
            },
            content2: {
              DEFAULT: "#f4f4f5",
              foreground: "#27272a"
            },
            content3: {
              DEFAULT: "#e4e4e7",
              foreground: "#3f3f46"
            },
            content4: {
              DEFAULT: "#d4d4d8",
              foreground: "#52525b"
            },
            divider: {
              DEFAULT: "rgba(17, 17, 17, 0.15)"
            },
            focus: {
              DEFAULT: "#6CACB6"
            },
            foreground: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#11181C"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#f871a0",
              400: "#f54180",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#610726",
              900: "#310413",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#d4d4d8",
              foreground: "#000"
            },
            primary: {
              50: "#e6f3f5",
              100: "#cce7eb",
              200: "#99d0d7",
              300: "#6CACB6",
              400: "#4d9ba7",
              500: "#3d7a84",
              600: "#32626a",
              700: "#264a50",
              800: "#193135",
              900: "#0d191b",
              DEFAULT: "#6CACB6",
              foreground: "#fff"
            },
            secondary: {
              50: "#fef3e5",
              100: "#fde7cc",
              200: "#fbcf99",
              300: "#f9b766",
              400: "#f79f33",
              500: "#E88500",
              600: "#ba6a00",
              700: "#8c5000",
              800: "#5d3500",
              900: "#2f1b00",
              DEFAULT: "#E88500",
              foreground: "#fff"
            },
            success: {
              50: "#e8faf0",
              100: "#d1f4e0",
              200: "#a2e9c1",
              300: "#74dfa2",
              400: "#45d483",
              500: "#17c964",
              600: "#12a150",
              700: "#0e793c",
              800: "#095028",
              900: "#052814",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#fefce8",
              100: "#fdedd3",
              200: "#fbdba7",
              300: "#f9c97c",
              400: "#f7b750",
              500: "#f5a524",
              600: "#c4841d",
              700: "#936316",
              800: "#62420e",
              900: "#312107",
              DEFAULT: "#f5a524",
              foreground: "#000"
            }
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#000000"
            },
            content1: {
              DEFAULT: "#18181b",
              foreground: "#fafafa"
            },
            content2: {
              DEFAULT: "#27272a",
              foreground: "#f4f4f5"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#e4e4e7"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#d4d4d8"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#6CACB6"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#f31260",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#3f3f46",
              foreground: "#fff"
            },
            primary: {
              50: "#0d191b",
              100: "#193135",
              200: "#264a50",
              300: "#32626a",
              400: "#3d7a84",
              500: "#4d9ba7",
              600: "#6CACB6",
              700: "#99d0d7",
              800: "#cce7eb",
              900: "#e6f3f5",
              DEFAULT: "#6CACB6",
              foreground: "#fff"
            },
            secondary: {
              50: "#2f1b00",
              100: "#5d3500",
              200: "#8c5000",
              300: "#ba6a00",
              400: "#E88500",
              500: "#f79f33",
              600: "#f9b766",
              700: "#fbcf99",
              800: "#fde7cc",
              900: "#fef3e5",
              DEFAULT: "#E88500",
              foreground: "#fff"
            },
            success: {
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#312107",
              100: "#62420e",
              200: "#936316",
              300: "#c4841d",
              400: "#f5a524",
              500: "#f7b750",
              600: "#f9c97c",
              700: "#fbdba7",
              800: "#fdedd3",
              900: "#fefce8",
              DEFAULT: "#f5a524",
              foreground: "#000"
            }
          }
        }
      }
    })
  ]
}
