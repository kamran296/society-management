import NavbarComponent from "../navbar-component/navbar.component";
import Card1 from "../cards-component/card1.component";
import Card2 from "../cards-component/card2.componet";
import Card3 from "../cards-component/card3.component";
import Card4 from "../cards-component/card4.component";
import Card5 from "../cards-component/card5.component";
import Card6 from "../cards-component/Card6.component";
import "./Admin-Dashboard.style.css";
// import { useEffect, useState } from "react";
export const AdminDashboard = () => {
  return (
    <div>
      <div className="cards-div">
        <div>
          <Card1 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
        <div>
          <Card6 />
        </div>
      </div>
    </div>
  );
};
