import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import React from "react";



function Carreras() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">Carreras</div>
      <Footer />
    </Layout>
  );
}

export default Carreras;
