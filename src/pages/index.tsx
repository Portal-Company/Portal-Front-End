import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import { Layout } from '../components/layout'
import React from 'react'

const Home: NextPage = () => {

  return (
  <React.Fragment>
    <Head>
        <title>
          Portal
        </title>
    </Head>
    <React.Fragment>
      <Banner/>
    </React.Fragment>
  </React.Fragment>
  )
}

Object.assign(Home, {
  Layout
})


export default Home;

