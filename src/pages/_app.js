import { SidebarProvider } from "@/context/SidebarContext";
import { GoogleMapsProvider } from "@/context/GoogleMapsContext";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <GoogleMapsProvider>
        <Component {...pageProps} />
      </GoogleMapsProvider>
    </SidebarProvider>
  );
}

export default MyApp;
