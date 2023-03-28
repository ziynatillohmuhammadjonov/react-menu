import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="btn-container">
      <Link to={"/allmenu"} className="btn">
        all
      </Link>
      <Link to={"/breakfast"} className="btn">
        breakfast
      </Link>
      <Link to={"/lunch"} className="btn">
        lunch
      </Link>
      <Link to={"/shakes"} className="btn">
        shakes
      </Link>
    </div>
  );
}

export default Links;
