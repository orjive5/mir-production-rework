import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIR Production',
  description: 'MIR Production specializes in producing music artists from around the world. We organize concerts and tours for musicians of all genres.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className='font-clash'>{children}</body>
    </html>
  )
}