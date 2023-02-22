import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { SchoolProfileView } from "../../views/School-Profile";

const SchoolPage: NextPage = () =>{
    const router = useRouter()
    return(
        <React.Fragment>
            <Head>
                <title>Perfil de Escola</title>
            </Head>
            <React.Fragment>
                <SchoolProfileView/>        
            </React.Fragment>
        </React.Fragment>
    )
}

Object.assign(SchoolPage, {
    Layout,
});

export default SchoolPage;