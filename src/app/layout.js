import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
