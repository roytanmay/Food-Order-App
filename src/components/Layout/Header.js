import { Fragment } from "react";
import mealsImage from "../../assests/image.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pet Pujo</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Food!" />
      </div>
    </Fragment>
  );
};

export default Header;
