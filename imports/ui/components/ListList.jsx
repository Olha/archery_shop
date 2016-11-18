import React from 'react';

import { FlowHelpers } from '../../../lib/client/route-helpers';

export default class ListList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lists } = this.props;
    return (
      <div className='list-products'>
        <a
          href={FlowHelpers.pathFor('/lists')}
          title='All products'
          className='list-product'
        >
          All products {FlowHelpers.currentRoute}
        </a>
        {lists.map(list => (
          <a
            href={FlowHelpers.pathFor(`/lists/${ list._id }`)}
            key={list._id}
            title={list.name}
            className='list-product'
          >
            {list.name}
          </a>
        ))}
      </div>
    );
  }
}

ListList.propTypes = {
  lists: React.PropTypes.array,
};

ListList.contextTypes = {
  router: React.PropTypes.object,
};
