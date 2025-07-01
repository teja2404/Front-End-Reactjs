import Button from "./Button";

export default function ProjectsSideBar({ onStartAddProject, projects, onSelectProject, selectProjectId }) {
  return (
    <aside className="bg-stone-900 px-8 py-16 w-1/3 rounded-r-xl h-screen text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}> + Add Project</Button>
      </div>
      <ul className="mt-8">
        {
          projects.map(project => {
            let cssSelected = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            if (project.id === selectProjectId) {
              cssSelected += " bg-stone-800 text-stone-200"
            } else {
              cssSelected += " text-stone-400"
            }
            return (<li key={project.id} >
              <button onClick={() => onSelectProject(project.id)}
                className={cssSelected}>
                {project.title}
              </button>
            </li>)
          })
        }
      </ul>
    </aside>
  )
}
//className="bg-black w-48 rounded-tr-lg h-screen"