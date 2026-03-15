import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Example() {
  const [selectedTab, setSelectedTab] = useState();
  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
    console.log(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleSelect("jsx")}
              label="JSX"
            />
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleSelect("state")}
              label="State"
            />
          </>
        }
      >
        {!selectedTab ? (
          "Please select a tab to see the content."
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab]?.title}</h3>
            <p>{EXAMPLES[selectedTab]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab]?.code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
