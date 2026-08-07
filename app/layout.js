import './globals.css'

export const metadata = {
  title: 'NSF - Information for Undergraduates',
  description: 'Explore funding opportunities and learn how to apply for NSF grants',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-weight="bold" fill="%233b82f6">N</text></svg>',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
