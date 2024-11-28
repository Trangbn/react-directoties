import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Headers.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from "./components/TabButton";
import {useState} from 'react';

function App() {

    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log("app executing function");

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton name="Components" isSelected={selectedTopic === 'components'} onSelect={()=> handleClick('components')} />
                        <TabButton name="Jsx" isSelected={selectedTopic === 'jsx'} onSelect={()=> handleClick('jsx')}/>
                        <TabButton name="Props" isSelected={selectedTopic === 'props'} onSelect={()=> handleClick('props')}/>
                        <TabButton name="State" isSelected={selectedTopic === 'state'} onSelect={()=> handleClick('state')}/>
                    </menu>
                    {!selectedTopic ? <p>Please select a topic</p> : <div>
                        <h2>{EXAMPLES[selectedTopic].title}</h2>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>}
                </section>
            </main>
        </div>
    );
}

export default App;
