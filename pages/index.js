import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import actions from '../actions'


import { Input, Form, Button } from 'semantic-ui-react'
import Card from '../components/CardView'

class Home extends Component {

  state = {
    errorSearch:''
  }

  constructor(props){
    super(props)
  }

  static async getInitialProps({ store , isServer , query }){
    const token = await store.dispatch( actions.loadToken(isServer) )
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <br />
        <Form>
          <Form.Group>
            <Input placeholder='Search' size='mini' style={{ width: '200px' }}></Input>
            <Button primary size='mini'>Send</Button>
          </Form.Group>
        </Form>
        {
          this.props.results.artists && this.props.results.artists.items.map(
            item => {
              return (
                <Card key={item.id}
                  name={item.name}
                  image={item.images}
                  genres={item.genres.join(', ')}/>
              )
            }
          )
        }
      </div>
    )
  }

}

const mapStateToProps = ({results,loading,token}) => ({results,loading,token})

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(Home)
