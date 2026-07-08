import { useState } from "react";

import works from "../data/works";

import WorksGrid from "./WorksGrid";

import ProjectModal from "./ProjectModal";

export default function WorksSection() {

  const [selectedWork, setSelectedWork] = useState(null);

  return (

    <>

      <WorksGrid

        works={works}

        onSelect={setSelectedWork}

      />

      <ProjectModal

        work={selectedWork}

        onClose={() => setSelectedWork(null)}

      />

    </>

  );

}