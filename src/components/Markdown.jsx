import React from 'react';
import ReactMarkdown from 'react-markdown'

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const markdownText = this.props.marktext;
        return (
            <div id="preview">
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </div>
        )
    }
}

export default Previewer;