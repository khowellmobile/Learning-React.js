import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import img from './../../../src/images/scenicImage0.jpg'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <img src={img} alt='seaside'></img>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
