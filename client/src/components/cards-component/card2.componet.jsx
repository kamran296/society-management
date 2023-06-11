import "./card.style.css";
import { Link } from "react-router-dom";
const Card2 = () => {
  return (
    <Link className="admin-dashboard-link" to="/admin/notice">
      <div className=" card-style">Mange Notices</div>
    </Link>
  );
};

export default Card2;
