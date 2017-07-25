import React from 'react'
import ItemList from '../ItemList'
import { shallow, mount } from 'enzyme'



describe('Render the props', () => {

  const item = {
    id:'zx001',
    title:'title Test',
    artists:[
      {name: 'Artist One'},
      {name: 'Artist Two'}
    ]
  }

  it('Should reder title', () =>{
    const wrapper = mount(
      <ItemList key={item.id}  {...item} />
    )
    expect(wrapper.prop('title')).toEqual('title Test')
  })

})
