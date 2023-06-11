import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import "./../AdminDetail/AdminDetail.css";
function AdminDetail() {
  const host = "http://localhost:5000";
  const [tableData, setTableData] = React.useState([]);
  useEffect(() => {
    const row = async () => {
      const response = await fetch(`${host}/api/v1/getallmember/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data, "getall");
      setTableData(data);
      console.log(tableData);
    };
    row();
  }, []);
  console.log(tableData, 123);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">FlatNo</th>
            <th scope="col">Name</th>
            <th scope="col">ParkinAllot</th>
            <th scope="col">ParkingUse</th>
          </tr>
        </thead>

        {Array.isArray(tableData.user) &&
          tableData.user.map((t) => {
            return (
              <tr className="table1">
                <td scope="row" className="table1">
                  {t.flatNo}
                </td>
                <td className="table1">{t.userName}</td>
                <td className="table1">4</td>
                <td className="table1">3</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default AdminDetail;
