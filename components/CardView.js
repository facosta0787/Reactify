import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardView = (props) => {
  const { name, image, genres } = props
  return (
  <Card>
    <Image src={ image } />
    <Card.Content>
      <Card.Header>
        { name || '' }
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        {genres || ''}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)}

export default CardView
