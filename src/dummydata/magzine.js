// Import PDFs from assets folder
import pdf1 from "../assets/pdf1formagzine1.pdf"
import pdf2 from "../assets/pdf2formagzine2.pdf"
import pdf3 from "../assets/letest.pdf"

// Optional: import cover pages from assets
import cover1 from "../assets/magzine1.png";
import cover2 from "../assets/magzine2.png";
import cover3 from "../assets/letestCover.png";

// Dummy magazines array
export const magazines = [
  // {
  //   _id: "101",
  //   title: "अंक 1",
  //   titlePage: cover1,                   // Imported from assets
  //   pdf: pdf1,                           // Imported from assets
  //   banner: "/banners/banner1.jpg",      // Public folder
  //   isSubscribed: true,
  // },
  // {
  //   _id: "102",
  //   title: "अंक 2",
  //   titlePage: cover2,                   // Imported from assets
  //   pdf: pdf2,                           // Imported from assets
  //   banner: "/banners/banner1.jpg",      // Public folder
  //   isSubscribed: true,
  // },
   {
    _id: "103",
    title: "अंक 3",
    titlePage: cover3,                   // Imported from assets
    pdf: pdf3,                           // Imported from assets
    banner: "/banners/banner1.jpg",      // Public folder
    isSubscribed: true,
  },
];