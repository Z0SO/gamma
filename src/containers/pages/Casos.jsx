import Header from 'components/cases/Header';
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import Layout from 'hocs/layouts/Layout';
import React from 'react'

function Casos() {
  return (
    <Layout>
      <Navbar />

      <Header />
    
      <Footer />
    </Layout>
  );
}

export default Casos