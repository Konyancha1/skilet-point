import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-inter bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;