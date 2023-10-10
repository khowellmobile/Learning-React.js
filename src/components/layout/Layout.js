import classes from "./Layout.module.css";
import Background from "./Background";

function Layout(props) {
  return (
    <div>
      <Background>
        <main className={classes.main}>{props.children}</main>
      </Background>
    </div>
  );
}

export default Layout;
