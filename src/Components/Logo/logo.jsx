import BrandLogo from "../../Static/Images/logo.svg"

const Logo = () => {
  return (
    <div className="brandLogo">
      <img 
        src= {BrandLogo} 
        className="logo" 
        style={
          { width: "120px"
          }
        }
        alt = "Logo"
      ></img>
    </div>
  );
}

export default Logo;