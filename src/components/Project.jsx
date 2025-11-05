const Project = ({ title = "Untitled", tags = [], onClick }) => {
  return (
    <section className="cursor-pointer transition-colors rounded-lg" onClick={onClick}>
      <div className="sm:pb-8 sm:pt-5 sm:px-10 sm:flex align-middle items-center justify-between">
        <div>
          <h3 className="text-2xl font-black sm:mt-0">{title}</h3>
          <div className="text-title flex flex-wrap gap-5 text-orange-400">
            {Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => <p key={index}>{tag}</p>)
            ) : (
              <p className="text-muted">No tags</p>
            )}
          </div>
        </div>
        <div className="max-sm:mt-20 max-sm:mb-5">
          <p className="font-medium">Read More →</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </section>
  );
};

export default Project;
