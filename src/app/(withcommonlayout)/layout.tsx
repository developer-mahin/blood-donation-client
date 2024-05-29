import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
