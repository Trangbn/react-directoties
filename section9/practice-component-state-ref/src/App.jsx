import SideBar from "./components/SideBar.jsx";
import NewProjects from "./components/NewProjects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
    return (
        <main className="h-screen my-8 gap-8 flex">
            <SideBar/>
            <NoProjectSelected/>
        </main>
    );
}

export default App;
