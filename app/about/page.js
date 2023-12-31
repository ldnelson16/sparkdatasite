import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        {/* Page title */}
        <title>LIVE DATA - SPARK</title>
        {/* Custom meta tags */}
        <meta name="description" content="Live data feed during races, SPARK @ UMICH." />
        <meta name="keywords" content="SPARK, UM, UMICH, Michigan, University of Michigan" />
      </Head>
      <div>This is About</div>
    </>
  )
}
