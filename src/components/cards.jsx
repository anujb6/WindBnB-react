import react, { useState } from "react";
import JsonData from "../rooms.json";
import "./cards.css";
import { AiFillStar } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Cards = () => {
  const [search, setSearch] = useState("");
  function cancel() {
    var input = document.getElementsByClassName("input");
    for (var i = 0; i < input.length; i += 1) {
      input[i].style.display = "none";
    }
  }
  return (
    <>
      <div className="input">
        <ImCancelCircle cursor="pointer" onClick={cancel} />
        <h2>Search</h2>
        <input
          type="text"
          id="dis"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="small">
        <h4>Stays in Finland</h4>
        <h5>12+ stays</h5>
      </div>
      <div className="cards">
        {JsonData.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="card">
              <img src={val.img} alt="" />
              <div className="info">
                <p>{val.type}</p>
                <p>{val.beds}</p>
                <p>
                  <AiFillStar color="red" />
                  {val.stars}
                </p>
              </div>
              <div className="name">
                <h3>{val.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
