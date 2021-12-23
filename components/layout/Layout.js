import Navigation from "../navigation/Navigation";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
