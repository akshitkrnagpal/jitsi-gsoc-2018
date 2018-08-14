import React, { Component } from 'react';

class ExternalLink extends Component {
    render() {
        return (
            <a
                { ...this.props } 
                rel='noopener noreferrer'
                target = '_blank' >
                {
                    this.props.children
                }
            </a>
        );
    }
}

export default ExternalLink;