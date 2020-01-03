import React, { Fragment, Component } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class App extends Component {
  render () {
    return (
      <Fragment style={styles}>
        <Header />
        <Exercises/>
        <Footer />
      </Fragment>
    )
  }
}

export default App
