import React from 'react';
import TestUtils from 'react-addons-utils';
import Chai from 'chai';

const should = chai.should();

import Board from '../src/components/Board'

describe('Board component', function () {
  it('Renders data from List', function () {
    const title = Board.props.obj.text

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board title={title} />);
    title.props.obj.text.should.equal('')
  }
)
});
