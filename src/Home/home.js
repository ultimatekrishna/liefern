import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name1: "Krishna", name2: "Saurabh", name3: "Abhishek" };
    }
    render() {
        return <div><h1>Hello, {this.state.name1}</h1><h1>Hello, {this.state.name2}</h1><h1>Hello, {this.state.name3}</h1>
            <h2>Please start working on this application.</h2></div>;
    }
}

export default Home;