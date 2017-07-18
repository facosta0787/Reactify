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
        <Form onSubmit={this.handleBuscarClick}>
          <Form.Group>
            <Input placeholder='Search' size='mini' style={{ width: '200px' }} name='Searcher'></Input>
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

  // Event functions
  handleBuscarClick = async (e) => {
      e.preventDefault()
      const input = document.getElementsByName('Searcher')
      const value = input[0].value
      if(!value == ''){
        await this.props.actions.loadResults(value)
      }else{
        this.setState({errorSearch:'this field is required!'})
      }
  }

}

const mapStateToProps = ({results,loading,token}) => ({results,loading,token})

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(Home)
