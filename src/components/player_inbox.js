import React, { Component } from 'react';

import { connect } from 'react-redux';
import { authCheckState } from '../actions';
import TopNavbar from "./top_navbar";


class PersonalDetails extends Component {

    state = {
        data: {},
        tree:'',
        level: ''
    }

    async componentDidMount() {

        this.props.authCheckState()
        this.setState({ ready: true })
    
      }

      render(){
      return (
        <div>
             <TopNavbar />
            <p>player inbox page works!!</p>
         </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default connect(mapStateToProps, { authCheckState })(PersonalDetails);