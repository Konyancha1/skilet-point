import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-[7%] md:px-[20%]">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;