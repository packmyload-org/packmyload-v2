'use client'
import './globals.css'
import dynamic from 'next/dynamic'
const Provider = dynamic(()=> import ( '@/providers/provider'),{loading:()=><Loading/>, ssr: false})
import Loading from './loading'
import Script from 'next/script';
import { usePathname } from 'next/navigation';
const Nav = dynamic(() => import('@/components/Nav'), {
  loading: () => <Loading />,
  ssr: false
  })
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <Loading />,
  ssr: false
  })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const path = usePathname()
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8S8P8C8')`}}
        />
        {/* <!-- End Google Tag Manager --> */}

        <meta name="description" content="packmyload.com is the preferred and rated number one packing and moving company in Lagos and Abuja, Nigeria. We offer international and interstate packing and moving to Lagos. Our staff help you with a swift, fast &amp; efficient move."></meta>
            <meta property="og:image" content="https://www.packmyload.com/images/iconpackmyload.png"/>
            <meta property="og:image:type" content="image/png"></meta>
            <meta property="og:image:height" content="342"></meta>
            <meta property="og:title" content="packmyload.com"/>
          <link rel="icon" href="/favicon.ico"  />
          <title>Packmyload</title>
      </head>

      <body>
        <iframe title='google_tag_manager_iframe' src="https://www.googletagmanager.com/ns.html?id=GTM-M8S8P8C8"
          height="0" width="0"
        ></iframe>
          <div className='w-screen'>
            <main className='w-full overflow-y-hidden relative'>
              <Provider>
                {!path.includes('book_a_move') && <Nav />}
                  {children}
                {!path.includes('book_a_move') &&<Footer /> }
              </Provider>
            </main>
        <Script
        type="text/javascript"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '6501924b5212a400086a2372' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
          })(document, 'script');
          `,
        }}
        />
        </div>
      </body>
    </html>
  )
}
