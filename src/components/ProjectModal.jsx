export default function ProjectModal({ work, onClose }) {
  if (!work) return null;

  return (
    <div className="project-modal" onClick={onClose}>
      <div className="project-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <video src={work.video} controls autoPlay playsInline />

        <div className="project-info">
          <h2>{work.title}</h2>
          <p>{work.year}</p>
          <p>{work.description ?? "No description available."}</p>
        </div>
      </div>
    </div>
  );
}
