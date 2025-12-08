// Import PDFs from assets folder


// Optional: import cover pages from assets
import cover1 from "../assets/magzine1.png";

// Dummy magazines array
export const magazines = [
  {
    _id: "101",
    title: "अंक 1",
    titlePage: cover1,                   // Imported from assets
    pdf: "",                           // Imported from assets
    banner: "/banners/banner1.jpg",      // Public folder
    isSubscribed: true,
  },
];