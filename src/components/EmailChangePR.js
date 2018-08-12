import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';

import { EmailChangePRLink } from '../config';

class EmailChangePR extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>jitsi-meet</CardTitle>
                    <CardText>
                        For synchronizing email in native settings and 
                        conference settings, and email change listener 
                        was needed in the Jitsi Meet API module. Since,
                        this event was not needed before, it was not 
                        implemented. Hence, I implemented this.
                    </CardText>
                    <a
                        className = 'btn btn-dark'
                        href = { EmailChangePRLink }
                        rel='noopener noreferrer'
                        target = '_blank' >
                        View Pull Request
                    </a>
                </CardBody>
            </Card>
        );
    }
}

export default EmailChangePR;