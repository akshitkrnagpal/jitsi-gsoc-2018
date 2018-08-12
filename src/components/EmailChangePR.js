import React, { Component } from 'react';

import { EmailChangePRLink } from '../config';
import PRInfo from './PRInfo';

class EmailChangePR extends Component {
    render() {
        return (
            <PRInfo
                link = { EmailChangePRLink }
                repo = 'jitsi-meet'
                text = '
                    For synchronizing email in native settings and 
                    conference settings, and email change listener 
                    was needed in the Jitsi Meet API module. Since,
                    this event was not needed before, it was not 
                    implemented. Hence, I implemented this.
                ' />
        );
    }
}

export default EmailChangePR;