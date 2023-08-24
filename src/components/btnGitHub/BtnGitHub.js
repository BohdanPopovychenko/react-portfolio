import "./style.css";
import svg from "./Vector.svg";
const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={svg} alt="No" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
