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
    </div>
  );
}

export default ProjectButtons;
