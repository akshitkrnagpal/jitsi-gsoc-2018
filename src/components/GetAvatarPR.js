import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';

import { GetAvatarPRLink } from '../config';

class GetAvatarPR extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>js-utils</CardTitle>
                    <CardText>
                        The avatar for the user was generated using Gravatar
                        service from Email ID. For sharing this logic between
                        jitsi-meet and jitsi-meet-electron, it was moved from
                        jitsi-meet to js-utils.
                    </CardText>
                    <a
                        className = 'btn btn-dark'
                        href = { GetAvatarPRLink }
                        rel='noopener noreferrer'
                        target = '_blank' >
                        View Pull Request
                    </a>
                </CardBody>
            </Card>
        );
    }
}

export default GetAvatarPR;