import React, { Component } from 'react';

import { GetAvatarPRLink } from '../config';
import { PRInfo } from './base';

class GetAvatarPR extends Component {
    render() {
        return (
            <PRInfo
                link = { GetAvatarPRLink }
                repo = 'js-utils'
                text = '
                    The avatar for the user was generated using Gravatar
                    service from Email ID. For sharing this logic between
                    jitsi-meet and jitsi-meet-electron, it was moved from
                    jitsi-meet to js-utils.
                ' />
        );
    }
}

export default GetAvatarPR;