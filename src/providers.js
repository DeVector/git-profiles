import React from "react";
import App from './App';
import { StyleCSS } from "./global/styleCSS";
import GitProvider from "./providers/git-provider";

const Providers = () => {
    return (
        <main>
            <GitProvider>
                <StyleCSS />
                <App />
            </GitProvider>
        </main>
    )
}

export default Providers;