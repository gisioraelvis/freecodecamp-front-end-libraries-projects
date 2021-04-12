import "./App.css";
import ReactFCCtest from "react-fcctest";
import { useState } from "react";
let marked = require("marked");

function App() {
  const sampleText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
  const [data, setData] = useState(sampleText);
  
  return (
    <div className="App">
      <ReactFCCtest />
      <div className="header">Markdown Previewer</div>
      <div className="previewer">
        <div className="input">
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            id="editor"
          />
        </div>
        <div
          className="output"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(data) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
