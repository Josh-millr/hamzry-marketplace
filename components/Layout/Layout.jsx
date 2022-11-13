export const Layout = ({ topNav: TopNav, footer: Footer, children }) => (
  <>
    <main>
      <TopNav />
      <div className="">{children}</div>
    </main>
    <Footer />
  </>
);
