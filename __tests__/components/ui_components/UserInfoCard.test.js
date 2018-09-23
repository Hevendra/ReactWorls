import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'
import UserInfoCard  from '../../../src/components/ui_components/UserInfoCard'

describe('UserInfoCard Component',()=>{
    it('matches the snapshot',()=>{
        const tree=renderer.create(<UserInfoCard/>).toJSON
        expect(tree).toMatchSnapshot()
    })
})

