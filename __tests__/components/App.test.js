import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import App from '../../src/components/App';


describe('Button Component',()=>{
  it('Basic Test',()=>{
      const tree=renderer.create(<App/>).toJSON
      
  })
})

