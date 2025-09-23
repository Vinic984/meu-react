import React, { Component } from 'react';

type WelcomeProps = {
    name: string;
}

class Welcome extends Component<WelcomeProps> {
    render() {
        return <h1>Bem vindo, {this.props.name}</h1>;
    }
}



export default Welcome;