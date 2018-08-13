import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { CommitsLink } from '../config';

class UsefulLinks extends Component {
    render() {
        return (
            <Container>
                <h2>Useful Links</h2>
                <ul className = 'list-unstyled'>
                    <li>
                        <a
                            href = { CommitsLink }
                            rel='noopener noreferrer'
                            target = '_blank'>
                            My commits to jitsi-meet-electron
                        </a>
                    </li>
                </ul>
            </Container>
        );
    }
}

export default UsefulLinks;