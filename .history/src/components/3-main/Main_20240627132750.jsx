import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const handleFilterClick = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setFilteredProjects(myProjects);
    } else {
      const filtered = myProjects.filter(project => project.category.includes(category));
      setFilteredProjects(filtered);
    }
  };

  const categories = ["all", "react", "css", "js", "html"];

  return (
    <main className="flex" id="projects">
      <section className="flex left-section">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={currentActive === category ? "active" : ""}
          >
            {category === "all" ? "All Projects" : category.toUpperCase()}
          </button>
        ))}
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={project.imgPath}
              className="card"
            >
              <div style={{ maxWidth: "266px" }}>
                <a href={project.link}>
                  <img width={266} src={project.imgPath} alt={project.projectTitle} />
                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{project.projectTitle}</h1>
                    <p className="sub-title">{project.description}</p>
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <a  href={project.link}><div className="icon-link"></div></a>
                        <a href={project.github}><div className="icon-github"></div></a>
                      </div>
                      <a className="link flex" href="#">
                        more
                        <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
