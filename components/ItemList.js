import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemList = (props) => {
  const title = props.name
  const { artists, images  } = props

  return (

    <Item>
      { images && <Item.Image size='tiny' src={ images[1].url } />}
      <Item.Content verticalAlign='middle'>
        <Item.Header>{ title }</Item.Header>
        <Item.Description>
          { artists.map(item => item.name ).join(', ') }
        </Item.Description>
      </Item.Content>
    </Item>

  )
}

export default ItemList
