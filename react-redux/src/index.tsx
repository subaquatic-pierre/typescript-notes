import React, {Component} from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color: string
}

class App extends Component<AppProps> {
    state = {counter: 0}

    onIncrementClick = ():void => {
        this.setState({counter: this.state.counter +1})
    }

    onDecrementClick = ():void => {
        this.setState({counter: this.state.counter -1})
    }

    render() {
        return (
        <div>
            <h1>The color is {this.props.color}</h1>
            <button onClick={this.onIncrementClick}>Increment</button>
            <button onClick={this.onDecrementClick}>Decrement</button>
            <h3>Number: {this.state.counter}</h3>
        </div>
        )
    }
}

ReactDOM.render(
    <App color='blue' />,
    document.getElementById('root')
)