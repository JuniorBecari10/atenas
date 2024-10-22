/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        colors: {
            "aqua": "#45A29E",
            "background": "#EEE2DC",
            "background-darker": "#DBCDC7",
        },

        extend: {
            backgroundImage: {
                "lib": "url('/assets/biblioteca.png')",
            },

            spacing: {
                "105": "28rem",
            },

            width: {
                "110": "30rem",
            },

            height: {
                "screen-90": "90vh",
            },

            fontFamily: {
                "montserrat": "'Montserrat', sans-serif",
            },
        }
    }
};