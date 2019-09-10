import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { IntlProvider } from 'react-intl';
import { messages } from './components/messages';
import { getLanguage } from './actions/language';

class App extends Component {

  // constructor() {
  //   this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  // }

  state = {
    lang: 'zh',
  }

  componentDidMount() {
    this.props.getLanguage();
    this.setState({inbox: 0});
  }

  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <Router>
          <BaseRouter />
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  }
}

export default connect(mapStateToProps, { getLanguage })(App);
