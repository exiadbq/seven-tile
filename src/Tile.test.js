import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Tile from './Tile';

test('it works', () => {
	const tree = renderer.create(<Tile title={'test'}/>).toJSON()
	expect(tree).toMatchSnapshot()
});
