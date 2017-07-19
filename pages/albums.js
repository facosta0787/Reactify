import React, { Component } from 'react';
import Menu from '../components/MenuView'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import actions from '../actions'

class AlbumsPage extends Component {

  constructor(props) {
    super(props);

  }

  async getInitialProps({ store , isServer , query }){

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        
        <Menu />
      </div>
    );
  }

}

const mapStateToProps = ({results,loading,token}) => ({results,loading,token})

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(AlbumsPage)
