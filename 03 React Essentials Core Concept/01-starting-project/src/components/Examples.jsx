import TabButton from './TabButton'
import { EXAMPLES } from '../data-with-examples';
import { useState } from 'react'
import Section from './Section'
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }


  return (
    <Section title="Examples" id="examples" >
      <Tabs button={<><TabButton
        isSelected={selectedTopic === 'components'}
        onClick={() => handleSelect('components')}
      >
        Components
            </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}
        >
          JSX
            </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleSelect('props')}
        >
          Props
            </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleSelect('state')}
        >
          State
            </TabButton></>}>
        {tabContent}

      </Tabs>

    </Section >
  )
}