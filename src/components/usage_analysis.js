import React, { Component } from 'react';
import { authCheckState } from '../actions';
import { connect } from 'react-redux';
import TopNavbar from "./top_navbar";


class UsageAnalysis extends Component {

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
            <p>usage analysis page works!!</p>
         </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.language.lang
    }
}

export default connect(mapStateToProps, { authCheckState })(UsageAnalysis);