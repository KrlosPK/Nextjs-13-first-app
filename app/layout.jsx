import '../styles/globals.css'
import { Header } from '../components/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>My first Next app</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
