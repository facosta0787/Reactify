import React, { Component } from 'react';
import Menu from '../components/MenuView'
import { Item } from 'semantic-ui-react'
import ItemList from '../components/ItemList'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import actions from '../actions'

class TrackPage extends Component {

  constructor(props) {
    super(props);

  }

  async getInitialProps({ store , isServer , query }){

  }

  componentDidMount() {
      console.log(this.props)
  }

  render() {
    const { tracks } = this.props.results
    console.log( tracks )
    return (
      <div>
        <Menu />
        <Item.Group divided style={{ width: '70%', margin: '0 auto' }}>
          {
              tracks && tracks.items.map(
                item => {
                  return(
                    <ItemList  key={item.id} {...item}/>
                  )
                }
              )
          }
        </Item.Group>

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

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(TrackPage)
