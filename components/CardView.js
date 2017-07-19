import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardView = (props) => {
  const image = !props.image.length == 0 ? props.image[0].url : 'static/img/default-image.png'
  const { name, genres, followers } = props
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
        { followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } Followers
      </a>
    </Card.Content>
  </Card>
)}

export default CardView
