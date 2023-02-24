import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StudentSubscriptionPart3 from "../views/studentSubscriptionPart3";

const StudentSubscriptionPart3Page: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inscrição parte 3</title>
      </Head>
      <React.Fragment>
        <StudentSubscriptionPart3/>        
      </React.Fragment>
    </React.Fragment>
  );
};

export default StudentSubscriptionPart3Page;
