import React, { useEffect, useState } from "react";

function Notice() {
  const host = "http://localhost:5000";
  const [notice, setNotice] = useState({ title: "", description: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/v1/notice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: notice.title,
        description: notice.description,
      }),
    });
    const data = await response.json();
    console.log(data);
    setNotice(data);
    if (data.success == true) {
      alert("Notice added Successfully!");
    }
  };
  const onchange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="title"
            value={notice.title}
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="exampleInputPassword1"
            value={notice.description}
            onChange={onchange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Notice
        </button>
      </form>
    </div>
  );
}

export default Notice;
