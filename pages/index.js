import React, { Component } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'
import Card from '../components/CardView'

class Home extends Component {

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
        <Card name='Felipe Acosta'
              image='static/img/default-image.png'
              genres='Reggaeton, Electronic, Edm, Techno'></Card>
      </div>
    )
  }

}

export default Home;
