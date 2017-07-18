import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react'
class Home extends Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Input placeholder='Search' size='mini' style={{ width: '200px' }}></Input>
            <Button primary size='mini'>Send</Button>
          </Form.Group>
        </Form>
        
      </div>
    );
  }

}

export default Home;
