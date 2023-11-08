import dynamic from 'next/dynamic';
import './globals.css'
import Script from 'next/script';
import Loading from './loading';
const Provider = dynamic(() => import("@/providers/provider"), { ssr: false , loading: () => <Loading />})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) { 
  return (
    <html lang="en">
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://maps.googleapis.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preload" href='/images/bg/shapes-big-new.webp' />
          <link rel="icon" type='image/png' href="/favicon.ico" />
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          strategy="lazyOnload"
          async={true}
          dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8S8P8C8')`}}
        />
        {/* <!-- End Google Tag Manager --> */}
        
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="packmyload is the preferred and rated Nigeria's #1 packing and moving company in Lagos and Abuja. We offer international and interstate packing and moving to Lagos. Our staff help you with a swift, fast &amp; efficient move."></meta>
        <meta name="keywords" content="moving company, Nigeria, Lagos, Abuja, international relocation, interstate moving, professional movers" />
            <meta property="og:image" content="https://www.packmyload.com/images/iconpackmyload.webp"/>
            <meta property="og:image:type" content="image/png"></meta>
            <meta property="og:image:height" content="342"></meta>
            <meta property="og:title" content="packmyload.com"/>
            <meta property="og:image:width" content="342" />
            <meta property="og:description" content="Nigeria's # 1 packing and moving company in Lagos and Abuja." />
            <meta property="og:url" content="https://www.packmyload.com" />
        {/* Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.packmyload.com" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@packmyload" />
        <meta property="twitter:image" content="https://www.packmyload.com/images/iconpackmyload.webp"></meta>
        {/* WhatsApp */}
        <meta property="og:site_name" content="packmyload.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:see_also" content="https://www.packmyload.com" />
        <title>Packmyload</title>
        
      </head>

      <body>
        <iframe title='google_tag_manager_iframe' src="https://www.googletagmanager.com/ns.html?id=GTM-M8S8P8C8"
          height="0" width="0"
        ></iframe>
          <div className='w-full'>
            <main className={`w-full min-h-full overflow-y-hidden `}>
              <Provider>
                {children}
              </Provider>
            </main>
            {/* <Chat /> */}
        </div>
      </body>
      <Script
          strategy="lazyOnload"
          async={true}
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5d15294553d10a56bd7c3930/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
    </html>
  )
}
