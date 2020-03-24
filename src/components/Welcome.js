import React from 'react'


export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <h2>Current time {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
