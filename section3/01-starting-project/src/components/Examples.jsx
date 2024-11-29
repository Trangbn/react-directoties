import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = (!selectedTopic ? <p>Please select a topic</p> :
        <div>
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>);

    return (
        <Section id="examples" title={"Examples"}>
            <Tabs buttons ={
                <>
                    <TabButton name="Components" isSelected={selectedTopic === 'components'}
                               onClick={() => handleClick('components')}/>
                    <TabButton name="Jsx" isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}/>
                    <TabButton name="Props" isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}/>
                    <TabButton name="State" isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}/>
                </>
            }>{tabContent}</Tabs>
        </Section>
    );
}
