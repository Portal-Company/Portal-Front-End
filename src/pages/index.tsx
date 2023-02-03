import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import OfertaFormativa from "../components/oferta-formtiva";
import { Layout } from "../components/layout";
import React from "react";
import ShoolCardsContainer from "../components/shoolCardsContainer";
import FrequentQuestions from "../components/frequent-question";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Portal Home</title>
      </Head>
      <React.Fragment>
        <Banner />
        <OfertaFormativa />
        <ShoolCardsContainer />
        <FrequentQuestions />
      </React.Fragment>
    </React.Fragment>
  );
};

Object.assign(Home, {
  Layout,
});

export default Home;
