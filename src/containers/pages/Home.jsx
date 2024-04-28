import Header from "components/home/Header";
import Incentives1_HC from "components/home/Incentives1_HC";
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
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
