const { createApp } = Vue;

createApp({
  data() {
    return {
      //* NavBar List
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

      // FOOTER Company info object
      companyInfo: {
        logo: "logo-footer-autocar11.png",
        addres: "New Jersey, USA",
        number: "+1(234) 567 89 10",
        email: "example@example.com",
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },

      // FOOTER Account area link
      accountAreaLink: {
        title: "My Account",
        linkList: [
          {
            title: "My Account",
            link: "#",
          },
          {
            title: "Checkout",
            link: "#",
          },
          {
            title: "Cart",
            link: "#",
          },
          {
            title: "Packages",
            link: "#",
          },
          {
            title: "Add car",
            link: "#",
          },
        ],
      },

      // FOOTER quick link area
      quickLinkArea: {
        title: "Quick Links",
        linkList: [
          {
            title: "Home",
            link: "#",
          },
          {
            title: "About Us",
            link: "#",
          },
          {
            title: "Blog",
            link: "#",
          },
          {
            title: "Contact",
            link: "#",
          },
          {
            title: "Refund & Returns",
            link: "#",
          },
        ],
      },
    };
  },
  methods: {},
}).mount("#root");
