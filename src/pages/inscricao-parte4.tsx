import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StudentSubscriptionPart4 from "../views/studentSubscriptionPart4";

const StudentSubscriptionPart4Page: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inscrição parte 4</title>
      </Head>
      <React.Fragment>
        <StudentSubscriptionPart4/>        
      </React.Fragment>
    </React.Fragment>
  );
};

export default StudentSubscriptionPart4Page;
