import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
