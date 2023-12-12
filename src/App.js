import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/Toolbar';
import Previewer from './components/Markdown';



class Editor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          input: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n- And of course there are lists.\n- Some are bulleted.\n   - With different indentation levels.\n    - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
          input: event.target.value
      })
  }

  render() {
      return (
          <div>
              <div className="editorWrap">
                <Toolbar toolbarname={"Editor"} />
                <textarea onChange={this.handleChange} id='editor'>{this.state.input}</textarea>
              </div>
              <div className="previewWrap hide">
                <Toolbar toolbarname="Previewer" />
                <Previewer marktext={this.state.input} />
              </div>
          </div>
      )
  }
}



//------------------------Connecting react with redux and rendering------------------//

function App() {
  return (
    <div>
      <Editor />
  </div>
  );
}

export default App;
