// import React from 'react';
import "./home.style.css";
import NavbarComponent from "../navbar-component/navbar.component";
import BackgroundSlider from "../slider-cpmponent/slider.component";
import "./home.style.css";
import Footer from "../navbar-component/Footer";

const Home = () => {
  return (
    <div>
      <BackgroundSlider className="background-position" />
      <div className="container">
        <div className="left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum corporis
          quo consequuntur reiciendis! Tenetur voluptas rerum aperiam laudantium
          ea ipsum velit perspiciatis corrupti quam laborum dolore, harum
          repellendus impedit, ratione possimus praesentium error cupiditate est
          quis, quas esse a! Possimus expedita vitae porro nulla aliquam autem
          tempora perferendis at accusantium?
        </div>
        <div className="right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbfNGYcEpEsvTMgcrRWsz5CuUErallVJV-TN9UDwfuw&usqp=CAU&ec=48600113"
            alt="img"
          />
        </div>
      </div>
      <div className="container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Write your Complaint..."
        ></textarea>
      </div>

      <button className="button1">Submit</button>
      <Footer />
    </div>
  );
};

export default Home;
