import React from 'react';
import {shallow} from 'enzyme';
import {UserDetail} from '../../../src/components/ui_components/UserDetail';
import renderer from 'react-test-renderer';

describe ('Component UserDetail', () => {
  const testData = {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg',
    first_name: 'Hevendra',
    last_name: 'Jadaun',
  };
  const actionDelete = () => {};

  it ('should render without throwing an error', () => {
    expect (
      shallow (
        <UserDetail data={testData} handleDelete={actionDelete} />
      ).exists (<div className="card-body" />)
    ).toBe (true);
  });

  it ('should render avatar', () => {
    expect (
      shallow (
        <UserDetail data={testData} handleDelete={actionDelete} />
      ).find ('#image_avatar').length
    ).toEqual (1);
  });

  it ('Component Snapshot test', () => {
    const tree = renderer
      .create (<UserDetail data={testData} handleDelete={actionDelete} />)
      .toJSON ();
    expect (tree).toMatchSnapshot ();
  });
});
