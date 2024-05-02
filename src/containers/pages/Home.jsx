import BlogList from "components/home/BlogList";
import CTA from "components/home/CTA";
import Features from "components/home/Features";
import Header from "components/home/Header";
import Incentives1_HC from "components/home/Incentives1_HC";
import LogoCloud1 from "components/home/LogoCloud1";
import UseCases from "components/home/UseCases";
import { Footer } from "components/navigation/Footer";
import { Navbar } from "components/navigation/Navbar";
import { Layout } from "hocs/layouts/Layout";

import React from "react";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header/>
        <Incentives1_HC />
        <UseCases />
        <Features />
        <CTA />

        <LogoCloud1 />

        <BlogList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
