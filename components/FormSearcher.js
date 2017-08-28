import React, { Component } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'

class FormSearcher extends Component {

  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmit} style={{ margin:'5px auto 0 auto', width: 260 }}>
          <Form.Group>
            <Input placeholder='Search' size='mini' style={{ width: '200px' }} name='Searcher'></Input>
            <Button secondary size='mini'>Send</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }

}

export default FormSearcher
