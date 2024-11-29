import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from '../data.js';

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton name="Components" isSelected={selectedTopic === 'components'}
                           onSelect={() => handleClick('components')}/>
                <TabButton name="Jsx" isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}/>
                <TabButton name="Props" isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}/>
                <TabButton name="State" isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}/>
            </menu>
            {!selectedTopic ? <p>Please select a topic</p> : <div>
                <h2>{EXAMPLES[selectedTopic].title}</h2>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>}
        </section>
    );
}