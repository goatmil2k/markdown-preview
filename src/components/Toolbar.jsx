import React from 'react';

class Toolbar extends React.Component {

    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }
    
    changeView() {
        console.log("Clicked");
        const parent = this.iconRef.parentElement;
        const grandParent = parent.parentElement;
    
        const isMaximum = grandParent.classList.contains('maximized')
    
        if (isMaximum) {
            grandParent.classList.remove('maximized');
        }
        else {
            grandParent.classList.add('maximized');
        }
    }

    render() {
        return (
            <div className='toolbar'>
                <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
                {this.props.toolbarname}
                <i
                    ref={(icon) => this.iconRef = icon} // Create a ref for the <i> element
                    className="fa fa-arrows-alt"
                    onClick={this.changeView}
                ></i>
            </div>
        )
    }
}


export default Toolbar;