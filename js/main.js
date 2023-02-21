const { createApp } = Vue;

createApp({
  data() {
    return {
      //* NavBar List completa

      navbarList: [
        {
          title: "Home",
          link: "#",
          icon: "",
        },
        {
          title: "About Us",
          link: "#",
          icon: "",
        },
        {
          title: "Vehicles",
          link: "#",
          icon: "",
        },
        {
          title: "Dealers",
          link: "#",
          icon: "",
        },
        {
          title: "Packages",
          link: "#",
          icon: "",
        },
        {
          title: "blog",
          link: "#",
          icon: "",
        },
        {
          title: "Contact",
          link: "#",
          icon: "",
        },
        {
          title: "My Account",
          link: "#",
          icon: "padlock.png",
        },
        {
          title: "Add Car",
          link: "#",
          icon: "add.png",
        },
        {
          title: "",
          link: "#",
          icon: "bars-staggered-solid.svg",
        },
        {
          title: "+1 (234)567 89 10",
          link: "#",
          icon: "headphones.png",
        },
      ],
    };
  },
  methods: {},
}).mount("#root");
