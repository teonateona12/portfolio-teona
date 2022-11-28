import combined from "../images/Combined.png";
import group from "../images/Group.png";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={combined} />
      <img src={group} />
    </div>
  );
};

export default Header;
