import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import {GoogleOAuthProvider} from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
        <div>
          <GoogleOAuthProvider clientId="100629815061-akv87j39c9720gt0sak87g6p88figrta.apps.googleusercontent.com">
              <Component {...pageProps} />
              <Toaster />
              </GoogleOAuthProvider>    
        </div>  
  )
}
