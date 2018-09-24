import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../../../src/components/ui_components/UserDetail';
import renderer from 'react-test-renderer'



describe('Component UserDetail',()=>{

    
    it('User',()=>{
        const tree=renderer.create(<UserDetail key={"1"} data={{}} handleDelete={()=>{}}/>).toJSON
        
    });

    
});