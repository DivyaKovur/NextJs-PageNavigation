import Navbar from '@/app/Navbar'; 
// import "@/app/global.css"
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* This should always render */}
        <main>{children}</main> {/* Render the children here */}
      </body>
    </html>
  );
}
