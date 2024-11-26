import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Headers.jsx';
import CoreConcept from './components/CoreConcept';
// import componentImage from './assets/components.png';
// import jsx from './assets/jsx-ui.png';
// import stateMng from './assets/state-mgmt.png';
// import props from './assets/config.png';

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            {...CORE_CONCEPTS[0]}
                        />
                        <CoreConcept
                            {...CORE_CONCEPTS[1]}
                        />
                        <CoreConcept
                            {...CORE_CONCEPTS[2]}
                        />
                        <CoreConcept
                            {...CORE_CONCEPTS[3]}
                        />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
