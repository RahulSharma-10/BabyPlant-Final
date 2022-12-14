import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Head from 'next/head';
import Scroll from "../../components/Scroll";
import ShopBanner from "./../../components/ShopBanner";

const Products=()=>{
    return(
        <>
        <Scroll/>
      <Head>
      <title>BabyPlant - Shop</title>
      </Head>
    <Navbar />
    <ShopBanner/>
    <Category/>
    <Footer/>
        </>
    )
}
export default Products;