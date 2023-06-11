import React from "react";
import "./notice-page.css";
import NavbarComponent from "../../components/navbar-component/navbar.component";
import { useEffect } from "react";

export const NoticePage = () => {
  const host = "http://localhost:5000";
  const [notices, setNotices] = React.useState([]);
  useEffect(() => {
    const row = async () => {
      const response = await fetch(`${host}/api/v1/getallNotice/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data, "getall");
      setNotices(data);
      console.log(notices);
    };
    row();
  }, []);
  console.log(notices, 123);
  return (
    <div className="background-container-image">
      <div className="notice-page-head"></div>
      {/* <div className='seperator'></div> */}
      <div className="notice-page-head-2">
        <div className="notice-page-head2-div">
          <h1 className="notice-page-head2-div-h1">Housing society</h1>
          <p>This my Housing society</p>
        </div>
      </div>
      <div className="notice-content-main">
        <div id="notice-div">Notice</div>

        {Array.isArray(notices.notice) &&
          notices.notice.map((e) => {
            return (
              <div id="notice-div-item">
                <ul>
                  <li>{e.title}</li>
                  <li>{e.description}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};
