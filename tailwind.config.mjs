import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                display: ["Aclonica", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "primary-300": "#25fbad",
                "secondary-900": "#34314e",
            },
        },
    },
    plugins: [],
};
