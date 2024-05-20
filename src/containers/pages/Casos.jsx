import CasesList from 'components/cases/CasesList';
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
      <CasesList />

      <Footer />
    </Layout>
  );
}

export default Casos