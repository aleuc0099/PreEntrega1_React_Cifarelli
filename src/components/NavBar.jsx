import List_item from "./ListItem";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="nav_box">
      <nav id="main_nav">
        <div id="logo_col">
          <div id="logo_box">
            <a id="logo" href="#">
              Alejo<span>Foods</span>
            </a>
          </div>
        </div>
        <ul id="nav_list">
          <List_item href="#" text="Restaurants" />
          <List_item href="#" text="Food" />
          <List_item href="#" text="Special Offers" />
          <List_item href="#" text="Discounts" />
        </ul>
        <CartWidget/>
      </nav>
    </div>
  );
};
export default NavBar;
