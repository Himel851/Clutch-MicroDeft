import "@/styles/globals.css";
import NavbarPage from "../Component/Navbar/NavbarPage";
import Footer from "../Component/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarPage />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
