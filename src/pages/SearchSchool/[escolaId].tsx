import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";

const SchoolPage: NextPage = () =>{
    const router = useRouter()
    const escolaId = router.query.escolaId
    return(
        <>
        <React.Fragment>
            <Link href={"/SearchSchool"}>
                <a href="">voltar</a>
            </Link>
            <span>Exibindo o {escolaId}</span>
        </React.Fragment>
        </>
    )
}

Object.assign(SchoolPage, {
    Layout,
});

export default SchoolPage;