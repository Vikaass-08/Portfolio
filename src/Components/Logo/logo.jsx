import BrandLogo from "../../Static/Images/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="brandLogo" onClick={() => navigate("/")}>
      <img
        src={BrandLogo}
        className="logo"
        style={{ width: "120px" }}
        alt="Logo"
      ></img>
    </div>
  );
};

export default Logo;
