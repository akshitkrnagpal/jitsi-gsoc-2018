import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Introduction, Phase1 } from '../sections';

class Index extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <Phase1 />
            </div>
        )
    }
}

export default Index;
