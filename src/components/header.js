import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
export default ({ time, date, day, month, year }) => (
  <React.Fragment>
    <header className="header">
      {/* <div className="clock">
        <span className="time">{time}</span>
        <span className="date">
          <span>{date}</span> <span>{day}</span>, <span>{month}</span>{" "}
          <span>{year}</span>.
        </span>
      </div> */}
      <Nav>
        {/* <h3>Achuth Hadnoor</h3> */}
        <div style={{ padding: "10px 5px ", color: "goldenrod" }}>
          Achuth Hadnoor{" "}
        </div>
        <Link to="/">Home</Link>
        <Link to="/blog">blog</Link>
        <Link to="/now">now</Link>
      </Nav>
    </header>
  </React.Fragment>
);

const Nav = styled.nav`
  padding: 10px;
  a {
    padding: 10px;
    margin: 10px 0px;
  }
`;