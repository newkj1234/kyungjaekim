import { useEffect } from "react";

export default function ProjectModal({ work, onClose }) {

  // ESC 키로 닫기

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {

        onClose();

      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [onClose]);

  // 모달 열리면 뒤 스크롤 잠금

  useEffect(() => {

    if (work) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }

    return () => {

      document.body.style.overflow = "";

    };

  }, [work]);

  if (!work) return null;

  return (

    <div className="project-modal" onClick={onClose}>

      <div

        className="project-content"

        onClick={(e) => e.stopPropagation()}

      >

        <button

          className="close-button"

          onClick={onClose}

          aria-label="Close project"

        >

          ✕

        </button>

        <video

          src={work.video}

          controls

          autoPlay

          playsInline

        />

        <div className="project-info">

          <h1>{work.title}</h1>

          <p className="project-year">

            {work.year}

          </p>

          <p className="project-medium">

            {work.medium}

          </p>

          <p className="project-venue">

            {work.venue}

          </p>

          {work.text && (

            <p className="project-text">

              {work.text}

            </p>

          )}

          {work.materials?.length > 0 && (

            <div className="project-materials">

              {work.materials.map((item, idx) => (

                <p key={idx}>{item}</p>

              ))}

            </div>

          )}

          {work.collaborators?.length > 0 && (

            <div className="project-collaborators">

              {work.collaborators.map((person, idx) => (

                <p key={idx}>{person}</p>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );

}
