import { M_PLUS_1 } from 'next/font/google'
import './globals.css'

const defaultfont = M_PLUS_1({
  subsets: ["latin"],
  weight: ["200","500","900"]
})

export const metadata = {
  title: 'けもシューマイの部屋',
  description: 'けもシューマイのホームページです。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={defaultfont.className}>{children}</body>
    </html>
  )
}
