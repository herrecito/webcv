const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    purge: [
        "./**/*.html",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            ...defaultTheme.fontFamily,
            serif: ["Fenix", "ui-serif", "serif"],
        },
        extend: {
            screens: {
                print: {
                    raw: "print"
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
