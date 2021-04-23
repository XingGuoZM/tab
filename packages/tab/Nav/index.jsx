import React, { Component } from 'react';
import { throttle } from 'utils'
import './index.css';

export default class Nav extends Component {
  constructor() {
    super();
    this.navRef = React.createRef();
    this.state = {
      fixStyle: null
    }
  }
  handleScroll() {
    const { top } = this.navRef.current.getBoundingClientRect();
    console.log(top);
    if (top < 0) {
      this.setState({ fixStyle: { position: 'fixed', top: 0 } });
    } else {
      this.setState({ fixStyle: { position: 'static' } });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
  }
  renderItem() {
    const { navItem, tabNav, data } = this.props;
    if (!!tabNav?.navItem) {
      return navItem(this.props.data);
    }
    return data?.map((item, i) => <div
      key={item.id}
      className={this.props.index === i ? 'tab-nav-active-item' : 'tab-nav-item'}>
      {item.name}
    </div>);
  }
  render() {
    return <div className="tab-nav" style={this.state.fixStyle} ref={this.navRef}>
      {this.renderItem()}
    </div>
  }
}