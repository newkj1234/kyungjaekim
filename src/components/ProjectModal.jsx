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
          <h1>
            {work.title}
            <span> · {work.year}</span>
          </h1>
          {work.subtitle && <h2>{work.subtitle}</h2>}
          {work.quote && <p className="project-quote">{work.quote}</p>}
          {work.description && <p>{work.description}</p>}
          {work.credits?.length ? (
            <div className="project-credits">
              {work.credits.map((credit, idx) => (
                <p key={idx}>{credit}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
