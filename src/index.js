import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const App = () => (
    <div style={styles}>
        <Hello name="CrippledTiger" />
        <h2>Start fucking with shit to make magic happen!!!!</h2>
    </div>
);

render(<App />, document.getElementById('root'));