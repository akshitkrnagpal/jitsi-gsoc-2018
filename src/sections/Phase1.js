import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Phase1 extends Component {
    render() {
        return(
            <Container>
                <h2>Phase 1</h2>
                <p>
                    In the first phase, the first thing I targeted was a New
                    Welcome Page and Multi-Domain support. Before creating
                    welcome page, I needed to setup React using Webpack.
                    Since Jitsi likes the projects to be follow specific
                    linting rules, I also configured eslint and flow as per
                    suggestion of my mentor.
                </p>
                <p>
                    The Welcome Page did not need much components initially. A
                    simple input box was enough for creating
                    functionality. The idea was to take either the room name for
                    default server (which was meet.jit.si at that time) or the
                    full url of the conference as input, navigate to the
                    conference, wait for conference to end, navigate back to the
                    Welcome Page. Navigation was done using React Router.
                </p>
                <p className = 'lead'>
                    Now, we could officially say that we had a fully functional
                    Welcome Page and Multi-Domain support.
                </p>
                <p>
                    But that was done using only local state. Before proceeding
                    further, it was a great idea to have some state management
                    so it was time to add Redux, which I did and also replaced
                    react-router-dom with react-router-redux for that.
                </p>
                <p>
                    For providing some navigation for future features I also,
                    added a simple Navigation Bar with some links.
                </p>
            </Container>
        );
    }
}

export default Phase1;