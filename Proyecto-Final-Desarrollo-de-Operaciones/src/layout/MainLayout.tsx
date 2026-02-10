import Navbar from '@/components/molecules/Navbar';


type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
