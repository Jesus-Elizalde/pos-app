import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import BottomBar from "../components/BottomBar";
import SideNavbar from "../components/SideNavbar";

export default function Document() {
  const [showSideBar, setShowSideBar] = useState(true);
  const states = [showSideBar, setShowSideBar];
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="main__container">
          {showSideBar && <SideNavbar />}
          <Main />
        </div>
        <BottomBar states={states} />
        <NextScript />
      </body>
    </Html>
  );
}
