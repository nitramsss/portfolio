import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { myProjects } from "../constants";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const open = (id) => {
    setProjectId(id);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setProjectId(null);
  };

  const selectedProject = myProjects.find((p) => p.id === projectId);

  return (
    <section id="projects" className="container mx-auto mask-t-from-90% pb-10 md:pb-4 mask-b-from-90% max-w-7xl">

      <div className="mx-auto pt-10 px-5 sm:px-0">
        <div className="text-heading font-black text-center mb-5 sm:text-left px-10">
          My Selected Projects
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4" />

        {/* Project List */}
        <div className="grid gap-4">
          {myProjects.map((p) => (
            <Project
              key={p.id}
              title={p.title}
              tags={p.tags}
              onClick={() => open(p.id)}
            />
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={isOpen}
          onClose={close}
          className="relative z-10 focus:outline-none"
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="mb-2 flex justify-between items-center text-base/7 font-medium text-white"
              >
                {selectedProject?.title}
                <img
                  src="assets/close.svg"
                  className="backdrop-blur-sm cursor-pointer w-5 h-5 font-black"
                  onClick={close}
                />
              </DialogTitle>

              <div className="text-white/70 mb-4">
                {selectedProject ? (
                  <ProjectDetails project={selectedProject} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              <div className="mt-4 gap-3 flex justify-center items-center sm:justify-end rounded-xl">
                <Button
                  onClick={() => window.open(selectedProject?.github, "_blank")}
              className="cursor-pointer bg-indigo-500 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 px-5 py-2 text-md font-bold rounded-2xl">
                  <a>My Repository</a>
                </Button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
