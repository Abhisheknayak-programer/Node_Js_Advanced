import { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import "./index.css";
import "./MyCustomBlocks/LengthBlock";

const App = () => {
  const [xml, setXml] = useState("");
  const [javaScriptCode, setJavaScriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  console.log(javaScriptCode);
  console.log(xml);

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Testing",
        colour: "#5f3dc4",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
          {
            kind: "block",
            type: "logic_boolean",
          },
          {
            kind: "block",
            type: "logic_negate",
          },
          {
            kind: "block",
            type: "logic_operation",
          },
        ],
      },
      {
        kind: "category",
        name: "Calculate",
        colour: "#0b7285",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
          {
            kind: "block",
            type: "math_arithmetic",
          },
        ],
      },
      {
        kind: "category",
        name: "Abhishek",
        colour: "#38d9a9",
        contents: [
          {
            kind: "block",
            type: "controls_whileUntil",
          },
          {
            kind: "block",
            type: "controls_for",
          },
          {
            kind: "block",
            type: "colour_picker",
          },
          {
            kind: "block",
            type: "math_single",
          },
          {
            kind: "block",
            type: "get_string_length",
          },
        ],
      },
    ],
  };

  const workspaceDidChange = (workspace) => {
    const code = javascriptGenerator.workspaceToCode(workspace);
    setJavaScriptCode(code);
  };

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 50,
            length: 5,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
    </>
  );
};

export default App;
