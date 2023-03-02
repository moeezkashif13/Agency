import '@/styles/globals.css'

import {Epilogue} from '@next/font/google'

const epilogue = Epilogue({

  subsets:['latin'],
  variable:'--font-epilogue'
// weight:['400',]

})

export default function App({ Component, pageProps }) {
  return( 
    <main className={`${epilogue.variable} font-sans`}>

  <Component {...pageProps} />
  </main>
  )

}
