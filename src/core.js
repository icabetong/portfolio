import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Header from "./components/header";
import Footer from "./components/footer";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";
import WorksSection from "./sections/works";
import ContactSection from "./sections/contact";

const RootPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{xl: "1200px"}}
      minH="100vh"
      m="0 auto">
      <Header />
      <HomeSection/>
      <AboutSection/>
      <WorksSection/>
      <ContactSection/>
      <Footer/>
    </Flex>
  );
}

function Core() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootPage/>} exact/>
      </Routes>
    </HashRouter>
  );
}

export default Core;
