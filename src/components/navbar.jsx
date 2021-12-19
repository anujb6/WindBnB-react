import react from "react";
import Logo from "../images/logo.png";
import "./navbar.css";
import { BsSearch } from "react-icons/bs";
const navbar = () => {
  function searchCountry() {
    var input = document.getElementsByClassName("input");
    for (var i = 0; i < input.length; i += 1) {
      input[i].style.display = "block";
    }
  }
  return (
    <div className="nav">
      <span>
        <img src={Logo} alt="" />
      </span>
      <section class="search-container">
        <button onClick={searchCountry} class="btn search-country" id="country">
          Helsinki, Finland
        </button>
        <button class="btn guests" id="guests">
          Add Guests
        </button>
        <button class="icon-search btn">
          <BsSearch color="red" />
        </button>
      </section>
    </div>
  );
};
export default navbar;
