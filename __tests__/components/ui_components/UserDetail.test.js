import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../../../src/components/ui_components/UserDetail';
import renderer from 'react-test-renderer'

describe('Component UserDetail',()=>{

    const minProps={
        key:11,
        data:{},
        handleDelete:()=>{}
    }
    
    it('User',()=>{
        const tree=renderer.create(<UserDetail {...minProps}/>).toJSON
        
    }),

    it('UserDetail props to details',()=>{
        const wrapper= shallow(<UserDetail {...minProps}/>)
        const wrapperProps=wrapper.length
        expect(wrapperProps).toEqual(1)
    })
})