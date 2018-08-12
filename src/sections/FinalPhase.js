import React, { Component } from 'react';
import { Container } from 'reactstrap';

class FinalPhase extends Component {
    render() {
        return(
            <Container>
                <h2>Final Phase</h2>
                <p>
                    Our first alpha release was out and I had completed
                    everything mentioned in my GSoC proposal. But why leave
                    it here? Lets do a few iteration of alpha and then get
                    rid of alpha channel for now.
                </p>
                <p>
                    The next feature we would love to have in this is Auto
                    Updates. Since electron-builder already has great support
                    for that it was an relatively easy task. We also did some
                    miscellaneous stuff before 2nd alpha release which was on
                    18th July, 2018.
                </p>
                <p>
                    Next we needed a list of recent meetings so that user can 
                    join any previous meeting easily. This was added to the 
                    third alpha release which we did on 28th July, 2018.
                </p>
                <p>
                    The last task was to show onboarding when the user opens 
                    the application for the first time.
                </p>
            </Container>
        );
    }
}

export default FinalPhase;