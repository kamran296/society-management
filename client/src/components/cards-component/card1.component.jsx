import "./card.style.css";
import { Link } from "react-router-dom";
const Card1 = () => {
  return (
    <div>
      <Link className="admin-dashboard-link" to="/admin/detail">
        <div className=" card-style">Members list</div>
      </Link>
    </div>
  );
};

export default Card1;
