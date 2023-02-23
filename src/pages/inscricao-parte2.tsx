import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StudentSubscriptionPart2 from "../views/studentSubscriptionPart2";

const StudentSubscriptionPart2Page: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inscrição parte 2</title>
      </Head>
      <React.Fragment>
        <StudentSubscriptionPart2/>        
      </React.Fragment>
    </React.Fragment>
  );
};

export default StudentSubscriptionPart2Page;
