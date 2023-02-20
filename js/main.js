const { createApp } = Vue;

createApp({
  data() {
    return {
      //! Prova iniziale Navbar
      navbar: [
        {
          title: "Home",
          link: "#",
          image: "",
        },
        {
          title: "About Us",
          link: "#",
          image: "",
        },
        {
          title: "Vehicles",
          link: "#",
          image: "",
        },
        {
          title: "Packages",
          link: "#",
          image: "add.png",
        },
      ],
    };
  },
  methods: {},
}).mount("#root");
