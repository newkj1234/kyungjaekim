import WorkCard from "./WorkCard.jsx";

export default function WorksGrid({ works, onSelect }) {
  return (
    <section className="works-wrapper">
      <section className="works-grid">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} onClick={() => onSelect?.(work)} />
        ))}
      </section>
    </section>
  );
}
