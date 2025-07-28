import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow pt-16 pb-4 ">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
