import React from 'react';
import { shallow } from 'enzyme';
import PearsonUsers  from '../../src/components/PearsonUsers';
import { UserDetail } from '../../src/components/ui_components/UserDetail'
import configureStore from 'redux-mock-store'
import {userActions} from '../../src/actions'
import {userConstants} from '../../src/constants'

describe('Component UserInfoCard', () => {

    const initialState = {}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<PearsonUsers store={store} /> )  
    })

    const dummyData = { data: { data: [] } };
    

    it('should render user item', () => {
        const testData = { data: { data: [{ id: 11, first_name: "George", last_name: "Edwards", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" }] } };
        expect(shallow(<PearsonUsers data={dummyData} store={store}/>).exists(<div className="card-body"></div>)).toBe(true)
    })

    


});

