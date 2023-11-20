'use client'
import Head from "next/head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return(
   <>
    <Head>
        <meta name="title" content="ADMIN INTERFACE"/>
        <meta name="description" content="Packmyload admin Interface" />
    </Head>
      {children}
      </>
  )
}