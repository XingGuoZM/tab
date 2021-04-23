import React, { Component } from 'react';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import Panel from './Panel';
import Nav from './Nav';
import './index.css';
BScroll.use(Slide);
class Tab extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }
  componentDidMount() {
    let bs = new BScroll('.tab-panel', {
      scrollX: true,
      scrollY: false,
      slide: {
        autoplay: false,
        loop: false
      },
      momentum: false,
      bounce: {
        left: true,
        right: true
      },
      probeType: 3
    });
    bs.on('slideWillChange', (page) => {
      // 即将要切换的页面
      const { pageX, pageY } = page;
      this.props.tabChange(pageX);
      this.setState({ index: pageX });
    });
  }

  renderPanelItem(data) {
    const { panelItem, endItem } = this.props.tabPanel;
    return data?.map(item => panelItem(item, item.id));
  }
  renderNavItem(data) {
    const { navItem } = this.props.tabNav;
    return data?.map(item => navItem && navItem(item));
  }
  render() {
    const { data, tabNav, tabPanel: { panelItem, endItem } } = this.props;
    return <div className='tab-wrap'>
      <Nav
        data={data}
        navItem={() => this.renderNavItem(data)}
        tabNav={tabNav}
        index={this.state.index}
      />
      <div className='tab-panel'>
        <div className='tab-panel-content'>
          {this.props?.data?.map(item => <Panel
            key={item.id}
            data={item}
            panelItem={() => this.renderPanelItem(item.list)}
            endItem={endItem}
          />
          )}
        </div>
      </div>
    </div>
  }
}

export default Tab;
