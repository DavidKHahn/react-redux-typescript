import React from 'react';
import ReactDOM from 'react-dom';
// describes all different props App component uses
interface AppProps {
    color: string;
}

class App extends React.Component<AppProps> {
    render(){
        return <div>{this.props.color}</div>
    }
}

ReactDOM.render(
    <App color="red" />,
    document.querySelector('#root')
);