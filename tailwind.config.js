/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        menu: "#979797",
        tablet: "#151923",
      }),
      backgroundImage: (theme) => ({
        mobile_home: "url('/assets/home/background-home-mobile.jpg')",
        mobile_destination:
          "url('/assets/destination/background-destination-mobile.jpg')",
        mobile_crew: "url('/assets/crew/background-crew-mobile.jpg')",
        mobile_technology:
          "url('/assets/technology/background-technology-mobile.jpg')",
        tablet_home: "url('/assets/home/background-home-tablet.jpg')",
        tablet_destination:
          "url('/assets/destination/background-destination-tablet.jpg')",
        tablet_crew: "url('/assets/crew/background-crew-tablet.jpg')",
        tablet_technology:
          "url('/assets/technology/background-technology-tablet.jpg')",
        desktop_home: "url('/assets/home/background-home-desktop.jpg')",
        desktop_destination:
          "url('/assets/destination/background-destination-desktop.jpg')",
        desktop_crew: "url('/assets/crew/background-crew-desktop.jpg')",
        desktop_technology:
          "url('/assets/technology/background-technology-desktop.jpg')",
      }),
      borderColor: (theme) => ({
        menu: "#979797",
      }),
      fontFamily: {
        subheading_1: "Bellefair",
        subheading_2: "Barlow Condensed",
        nav: "Barlow Condensed",
        body: "Barlow",
      },
      fontSize: {
        "7xl": "5rem",
        body: ".9375rem",
        subheading: "1.75rem",
        mobile_destination_heading: "3.5rem",
        mobile_destination_subheading: "1.75rem",
        tablet_heading: "9.375rem",
        tablet_explore: "2rem",
        tablet_subheading: "2.5rem",
        desktop_explore: "2rem",
        desktop_destination_heading: "6.25rem",
      },
      height: {
        mobile_crew: "223px",
        mobile_crew_slider: ".625rem",
        mobile_technology: "170px",
        tablet_crew: "532px",
        tablet_technology: "310px",
        desktop_home_info: "382px",
        desktop_technology: "500px",
      },
      letterSpacing: {
        widest: "2.7px",
        mobile_technology: "2.36px",
        tablet: "3.38px",
        desktop: "4.72px",
        desktop_explore: "2px",
      },
      opacity: {
        "04": ".04",
        10: ".1",
      },
      spacing: {
        home: "7rem",
        mobile_explore: "9.375rem",
        mobile_explore_outer: "13rem",
        mobile: "5.5rem",
        mobile_planet: "10.625rem",
        mobile_destination_nav_height: "1.75rem",
        tablet_home: "12.625rem",
        tablet_explore: "15.125rem",
        tablet_explore_outer: "20rem",
        tablet: "8.5rem",
        tablet_planet: "18.75rem",
        tablet_destination_info: "35.8125rem",
        tablet_crew_info: "35rem",
        tablet_technology_button: "3.75rem",
        desktop_home: "24.1875rem",
        desktop_explore: "17.125rem",
        desktop_explore_outer: "23rem",
        desktop: "13.25rem",
        desktop_destination: "10.375rem",
        desktop_planet: "25rem",
        desktop_crew_info: "30.5rem",
      },
      screens: {
        xsm: "390px",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#D0D6F9",
        dark: "#0B0D17",
      },
      width: {
        mobile_crew: "327px",
        mobile_crew_slider: ".625rem",
        mobile_technology: "375px",
        tablet_crew: "500px",
        desktop_hr: "473px",
        desktop_home_info: "450px",
        desktop_technology: "450px",
      },
    },
  },
  plugins: [],
};
