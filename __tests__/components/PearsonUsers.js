import React from 'react';
import { shallow } from 'enzyme';
import { PearsonUsers } from '../../src/components/PearsonUsers';
import { UserDetail } from '../../src/components/ui_components/UserDetail'

describe('Component UserInfoCard', () => {

    const dummyData = { data: { data: [] } };
    //const  actionDelete=()=>{};
    // it('should render without throwing an error', () => {
    //     expect(shallow(<UserDetail data={dummyData} handleDelete={actionDelete} />).exists(<div className="card-body"></div>)).toBe(true)
    //  expect(wrapper.find(GreetWrapper).exists()).toBe(true);
    //expect(wrapper.find('span').text()).toBe('welcome John Doe');
    //})

    it('should render waiting view', () => {
        const testData = { data: { key: "1" } };
        expect(shallow(<PearsonUsers data={testData} />).find('div').text()).toBe('Just a moment...')
    })

    it('should render user item', () => {
        const testData = { data: { data: [{ id: 11, first_name: "George", last_name: "Edwards", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" }] } };
        expect(shallow(<PearsonUsers data={dummyData} />).exists(<div className="card-body"></div>)).toBe(true)
    })

    it('should render user list', () => {
        const testData = {
            data: {
                data: [{ id: 11, first_name: "George", last_name: "Edwards", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" },
                { id: 12, first_name: "Rachel", last_name: "Howell", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg" }]
            }
        };
        //expect(shallow(<PearsonUsers data={testData} />).find(UserDetail)).to.have.lengthOf(2);
        //expect(shallow(<PearsonUsers data={testData} />).find('div').children()).to.have.lengthOf(2);
    })


});