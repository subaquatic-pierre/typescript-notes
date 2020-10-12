import React from 'react';

interface AppProps {
    color:string
}

export class App extends React.Component<AppProps> {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <p>The Color is: {this.props.color}</p> 
            </div>
        )
    }
}