import React, { Component } from 'react';
import './index.css';

export default class Panel extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const { data: { id, list }, panelItem, endItem } = this.props;
    return <section className='tab-panel-item'>
      {panelItem(list)}
      {endItem ? endItem() : <div className='tab-panel-loading'>到底了~</div>}
    </section>
  }
};
