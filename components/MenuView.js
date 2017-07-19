import React, { Component } from 'react';
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

import { Menu } from 'semantic-ui-react'

class MenuView extends Component {

  handleItemClick = (e, { name }) => {
    this.props.actions.setPageMenu(name)
    Router.push(name === 'artists' ? '/' : `/${name}`)
  }

  render() {
    const { pageMenu } = this.props
    return (
      <div style={{ margin:'0 auto 0 auto', width: 520 , marginBottom: '20px' }}>
        <Menu pointing secondary size='mini'>
            <Menu.Item name='artists' active={pageMenu === 'artists'} onClick={this.handleItemClick} />
            <Menu.Item name='tracks'  active={pageMenu === 'tracks'}  onClick={this.handleItemClick} />
            <Menu.Item name='albums'  active={pageMenu === 'albums'}  onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }

}

const mapStateToProps = ({ pageMenu }) => ({ pageMenu })

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView)
