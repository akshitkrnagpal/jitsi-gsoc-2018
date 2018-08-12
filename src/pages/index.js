import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { FinalPhase, Introduction, Phase1, Phase2 } from '../sections';

class Index extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <Phase1 />
                <Phase2 />
                <FinalPhase />
            </div>
        )
    }
}

export default Index;
