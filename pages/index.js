import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import actions from '../actions'

import { Grid } from 'semantic-ui-react'
import { Input, Form, Button } from 'semantic-ui-react'
import Card from '../components/CardView'
import Menu from '../components/MenuView'

import ax from '../services/axios-api'


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

  async componentDidMount(){

  }

  render() {
    return (
        <div  style={{ border: '0px solid black' }}>
        <Form onSubmit={this.handleBuscarClick} style={{ margin:'5px auto 0 auto', width: 260 }}>
          <Form.Group>
            <Input placeholder='Search' size='mini' style={{ width: '200px' }} name='Searcher'></Input>
            <Button secondary size='mini'>Send</Button>
          </Form.Group>
        </Form>
        <br />
        <Menu />
        <Grid>
        {
          this.props.results.artists && this.props.results.artists.items.map(
            item => {
              return (
                <Grid.Row key={item.id}>
                  <Grid.Column style={{ width: 290, margin: '0 auto' }}>
                    <Card
                      name={item.name}
                      image={item.images}
                      genres={item.genres.join(', ')}
                      followers= {item.followers.total}
                      />
                  </Grid.Column>
                </Grid.Row>
              )
            }
          )
        }
      </Grid>
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
