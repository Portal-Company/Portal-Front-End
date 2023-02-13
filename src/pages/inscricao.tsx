import type { NextPage } from "next";
import { Layout } from "../components/layout";
import Head from "next/head";
import React from "react";
import StudentSubscription from "../views/studentSubscription";

const StudentSubscriptionPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inscrição</title>
      </Head>
      <React.Fragment>
        <StudentSubscription/>        
      </React.Fragment>
    </React.Fragment>
  );
};

Object.assign(StudentSubscriptionPage,{
  Layout,
});

export default StudentSubscriptionPage;
