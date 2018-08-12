import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Phase2 extends Component {
    render() {
        return(
            <Container>
                <h2>Phase 2</h2>
                <p>
                    A lot was accomplished before the second phase started.
                    But the good thing was, a lot was waiting to be done.
                </p>
                <p>
                    The next thing was to implement some Native Settings.
                    We needed to have some settings in desktop app which
                    we had in mobile app. The settings were as follows -
                </p>
                <ul>
                    <li>Name of the user</li>
                    <li>Email ID of the user</li>
                    <li>Default Jitsi Server</li>
                    <li>Toggles for Audio/Video Muted</li>
                </ul>
                <p>
                    We decided to create a navigation drawer for that.
                    It also included Avatar Generation using Gravatar Service
                    using Email ID or Meeples Service of Jitsi using Name.
                </p>
                <p>
                    It took a little time. As a lot of miscellaneous things
                    were also involved like -
                </p>
                <ul>
                    <li>Creating Logo for Navbar</li>
                    <li>Keyboard Shortcut for Settings Drawer</li>
                    <li>Validation of Server URL</li>
                </ul>
                <p className = 'lead'>
                    Finally, Native settings were also checked off the list.
                </p>
                <p>
                    Now, since a decent application was ready, it was time 
                    to build it for all platforms (Windows, MacOS, Linux).
                    We decided to do builds of AppImage for Linux, DMG for 
                    MacOS and EXE for Windows. But since we had native 
                    dependency robotjs, we could only build targets on same
                    host machine. Therefere, we decided to add automatic 
                    build using Travis (MacOS and Linux) and Appveyor
                    (Windows).
                </p>
                <p>
                    We had our first alpha release on 13th July, 2018.
                </p>
            </Container>
        );
    }
}

export default Phase2;