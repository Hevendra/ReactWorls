import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Button from '../../../src/components/ui_components/Button';

describe('Component Button',()=>{
    it('works',()=>{
        const tree=renderer.create(<Button/>).toJSON
        
    })
})