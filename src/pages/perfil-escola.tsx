import type { NextPage } from "next";
import { Layout } from "../components/layout";
import Head from "next/head";
import React from "react";
import SchoolProfile from "../views/school-profile";

const SchoolProfilePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Perfil de escola</title>
      </Head>
      <React.Fragment>
        <SchoolProfile/>        
      </React.Fragment>
    </React.Fragment>
  );
};

Object.assign(SchoolProfilePage, {
  Layout,
});

export default SchoolProfilePage;
