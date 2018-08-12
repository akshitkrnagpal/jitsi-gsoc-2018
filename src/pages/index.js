import React, { Component } from 'react'
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FinalPhase, Introduction, Phase1, Phase2 } from '../sections';

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>GSoC'18 @ Jitsi | Akshit Kr Nagpal</title>
                </Helmet>
                <Introduction />
                <Phase1 />
                <Phase2 />
                <FinalPhase />
            </div>
        )
    }
}

export default Index;
