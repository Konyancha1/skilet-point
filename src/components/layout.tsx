import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 lg:px-44">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;