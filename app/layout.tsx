import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('@/components/Nav'), {
    loading: ()=> <Loading/>
  })
import './globals.css'
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: ()=> <Loading/>
  })
// import Nav from '@/components/Nav';
// import Footer from '@/components/Footer';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { App } from 'antd';
import Provider from '@/providers/provider'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4998J87');`}}
        />
        {/* <!-- End Google Tag Manager --> */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <meta name="description" content="packmyload.com is the preferred and rated number one packing and moving company in Lagos and Abuja, Nigeria. We offer international and interstate packing and moving to Lagos. Our staff help you with a swift, fast &amp; efficient move."></meta>
            <meta property="og:image" content="https://www.packmyload.com/images/iconpackmyload.png"/>
            <meta property="og:image:type" content="image/png"></meta>
            <meta property="og:image:height" content="342"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
            <meta property="og:title" content="packmyload.com"/>
          <link rel="icon" href="/favicon.ico"  />
          <title>Packmyload</title>
      </head>

      <body className='font-satoshi'>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4998J87"
          height="0" width="0"
        >
        </iframe> 
          <div className='w-full'>
            <main className='w-full overflow-y-hidden'>
                <Provider>
                  <StyledComponentsRegistry>
                    <App>
                      <Nav/>
                        {children}
                      <Footer />
                    </App>
                  </StyledComponentsRegistry>
                </Provider>
            </main>
          </div>
        </body>
    </html>
  )
}
