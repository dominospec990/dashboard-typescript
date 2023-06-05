import { type Metadata } from 'next'
import './globals.css'
// import "react-calendar/dist/Calendar.css";
import "@/components/calendar/MiniCalendar.css";

export const metadata: Metadata = {
  title: 'Horizon UI by Ories',
  description: 'Generated by create next app',
  applicationName: 'Horizon UI',
  keywords: ["react", "server components", 'nextjs', 'tailwind', 'admin', 'dashboard'],
  themeColor: '#422AFB',
  icons: [
    // { rel: "icon", type: 'image/svg', url: "/map/location.svg" },
    { rel: "apple-touch-icon", type: 'image/png', url: "/img/horizon.png" }
  ],
  generator: 'ichsankurnia',
  authors: [{ name: 'ichsankurnia', url: 'https://ories.goes2nobel.com' }],
  creator: 'ichsankurnia'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
