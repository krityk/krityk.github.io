import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';

import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../sections/Form.js';
const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Form />
    <Footer />
  </Layout>
);

export default IndexPage;