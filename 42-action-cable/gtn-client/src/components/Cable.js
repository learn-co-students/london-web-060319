import React from 'react';

var ActionCable = require('actioncable')

class Cable extends React.Component {

    componentDidMount() {
        const { url, channel, onRecieved, onConnected } = this.props
        const cable = ActionCable.createConsumer(url)

        cable.subscriptions.create(channel, {
            received: onRecieved,
            connected: onConnected
        });
    }

    render = () => <></>

}

export default Cable;