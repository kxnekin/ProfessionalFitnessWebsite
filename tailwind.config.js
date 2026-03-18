export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-delay2": "float 6s ease-in-out 2s infinite",
                "float-delay4": "float 6s ease-in-out 4s infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px) scale(1)",
                    },
                    "50%": {
                        transform: "translateY(-30px) scale(1.1)",
                    },
                },
            },
        },
    },
    plugins: [],
};