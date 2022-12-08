import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Head from 'next/head';
import Scroll from "../components/Scroll";

export default function Home() {

  let [products, setProducts] = useState([]);

  return (
    <div>
      <Scroll/>
      <Head>
      <title>BabyPlant - Shop</title>
    </Head>
    <Navbar />
    {/* <Router>
      <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/ProductOverview" element={<ProductOverview/>}></Route>
      </Routes>
    </Router> */}
    <ProductList/>
    <Footer/>
    </div>  
  );
}