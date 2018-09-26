import React from 'react';
import TestComponentStatic from 'custom-static';

export default class App extends React.Component {
    state = {
        Widget: null
    }

    loadWidget = async () => {
        const { default: Widget } = await import(/* webpackChunkName: "comp1" */ './Comp1');
        this.setState({ Widget })
    }

    render() {
        const { Widget } = this.state;

        return (
            <div>
                test
                <button onClick={this.loadWidget}>click</button>
                <TestComponentStatic />
                { Widget && (
                    <Widget />
                )}
            </div>
        )
    }
}