/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        admin: "0px 1px 6px rgba(0, 0, 0, 0.08)",
      },
      spacing: {},
      colors: {
        primary: "var(--primary)",
        main: "var(--main)",
        gray: "var(--text-gray)",
        "gray-new": "var(--gray-new)",
        "gray-new-1": "var(--gray-new-1)",
        red: "var(--text-red)",
        "gray-2": "var(--text-gray-2)",
        "primary-2": "var(--primary-2)",
        active: "var(--active)",
        hover: "var(--hover)",
        placeholder: "var(--placeholder)",
        black: "var(--black)",
        "blue-1000": "var(--blue-1000)",
      },
      textColor: {
        base: "var(--text-base)",
        white: "var(--text-white)",
        red: "var(--text-red)",
      },
      fontSize: {
        singleNewInfo: ["14px", "16px"],
        small: ["10px", "12px"],
      },
      backgroundImage: {
        newsBg:
          "url('https://s3-alpha-sig.figma.com/img/3c76/3a4e/908a1d2c435f46db6ae682154c24581f?Expires=1678060800&Signature=I9nYZdbZR64zs1xAMBoRF7vug8yosTq0yTuFIvVH3Cui0WhSn3wYdBxfZheJW5Ie3Ij5fcCvd0Si3Wwh5cRJXLfpBLB6XqWc~qX7wCXR6nrx2bRCL5-RA3HEQqXHEpYGy6WO7kVQUzKGhLsVX0XftRm6QO7MZA2w7mgVmY0thFGCbQUxIIwyLozqnJ~NEyBVAJq07DLTButpCI-okIjjVLFuPGL2YNyS7ANYcgl5ZmiGmfm8qhXzfr3nBamo2UxF9RYogZeUXjcGI4ldChXfNuy8CcGiNVdvFd66Z8Q5N7Ltko6K~VTmMn~GZUTyQHzE0CC2xxhs13lRv6biQ4r4xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',                )",
      },
      maxWidth: {
        "screen-xl": "1536px",
        main: "720px",
        "left-sidebar": "223px",
        "right-sidebar": "345px",
      },
      width: {
        "screen-xl": "1536px",
        main: "720px",
        "left-sidebar": "223px",
        "right-sidebar": "345px",
      },
      borderRadius: {
        default: "14px",
        10: "10px",
      },
    },
    screens: {
      sm: "100%",
      md: "834px",
      lg: "1196px",
      xl: "1536px",
    },
  },
};
