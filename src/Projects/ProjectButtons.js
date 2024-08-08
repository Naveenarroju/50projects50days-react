import { Link } from "react-router-dom";
import './project-buttons-style.css';

const ProjectButtons = () => {
  return (
    <div className="project-buttons-container">
      <button>
      <Link to="/expanding_cards">
      Expandle cards </Link></button>
      <button>
      <Link to="/progress_bar">
      Progress Bar </Link></button>
      <button>
      <Link to="/Blur_Effect">
        Blur Effect </Link></button>
      <button>
      <Link to="/Hidding_search">
      Hidding_search </Link></button>
      <button>
      <Link to="/rotating_nav">
      rotating_nav </Link></button>
    </div>
  );
}

export default ProjectButtons;
