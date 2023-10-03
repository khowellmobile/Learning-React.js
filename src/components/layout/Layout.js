import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Background from "./Background";

function Layout(props) {
  return (
    <div>
      <Background>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </Background>
    </div>
  );
}

export default Layout;
