import HomeScreen from "./components/screens/HomeScreen";
import ProductProvider from "./components/ProductProvider";
import AboutScreen from "./components/screens/AboutScreen";
import SocialMedia from "./components/about/SocialMedia";
import ContactUs from "./components/about/ContactUs";
import WelcomeScreen from "./components/screens/WelcomeScreen";

export const routers = [
  { path: "/welcome", element: <WelcomeScreen /> },
  { path: "/home", element: <HomeScreen /> },
  { path: "/product/:id", element: <ProductProvider /> },
  {
    path: "/about/*",
    element: <AboutScreen />,
    children: [
      { path: "media", element: <SocialMedia /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
];
