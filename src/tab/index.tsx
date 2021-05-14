import * as React from 'react';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import Panel from './Panel';
import Nav from './Nav';
import styles from './index.module.less';
BScroll.use(Slide);

export interface TabProps {
  tabChange: (page: any) => void;
  tabPanel: any;
  tabNav: any;
  data: any;
}

function Tab({ tabChange, tabPanel, tabNav, data }: TabProps) {
  const { useEffect, useState } = React;
  const [index, setIndex] = useState();
  useEffect(() => {
    let bs = new BScroll(`.${styles.tabPanel}`, {
      scrollX: true,
      scrollY: true,
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
      tabChange(pageX);
      setIndex(pageX);
    });
  }, []);
  return <div className={styles.tabWrap}>
    <Nav
      data={data}
      tabNav={tabNav}
      index={index}
    />
    <div className={styles.tabPanel}>
      <div className={styles.tabPanelContent}>
        {data?.map(item => <Panel
          key={item.id}
          data={item}
          tabPanel={tabPanel}
        />
        )}
      </div>
    </div>
  </div>
}

export default Tab;
