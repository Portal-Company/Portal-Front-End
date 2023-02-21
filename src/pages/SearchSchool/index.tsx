import { NextPage } from "next";
import { SearchSchoolView } from "../../views/Search-school";
import React from "react";
import Head from "next/head";
import { Layout } from "../../components/layout";

const SearchSchoolPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Buscar Escola</title>
            </Head>
            <React.Fragment>
                <SearchSchoolView/>        
            </React.Fragment>
        </React.Fragment>
    );
}

Object.assign(SearchSchoolPage, {
    Layout,
});


export default SearchSchoolPage;