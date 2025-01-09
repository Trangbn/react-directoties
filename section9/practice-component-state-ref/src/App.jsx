import SideBar from "./components/SideBar.jsx";
import NewProjects from "./components/NewProjects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from 'react';
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projectsState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            };
        })
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {

            const newProject = {
                ...projectData,
                id: Math.random()
            }

            return {
             ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleCancelAddProject() {
        setProjectState(prevState => {
            return{
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }

    function handleSelectProject(id) {
        setProjectState(prevState => {
            return{
                ...prevState,
                selectedProjectId: id
            }
        })
    }

    function handleDeleteProject() {

        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: projectsState.projects.filter(project => project.id !== projectsState.selectedProjectId)
            }
        })
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} />;

    if (projectsState.selectedProjectId === null) {
        content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (
        <main className="h-screen my-8 gap-8 flex">
            <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
            {content}
        </main>
    );
}

export default App;
