import * as React from 'react';
import { throttle } from '../../utils';
import styles from './index.module.less';

export interface NavProps {
  tabNav: { navItem: (data: Element) => Element; };
  data: any;
  index: any;
}

function Nav({ tabNav: { navItem }, data, index }: NavProps) {
  const { useEffect, useState, useRef } = React;
  const navRef = useRef();
  const [fixStyle, setFixStyle] = useState({});
  function handleScroll() {
    const dom: HTMLElement = navRef.current;
    const { top } = dom.getBoundingClientRect();
    console.log(top);
    if (top < 0) {
      setFixStyle({ position: 'fixed', top: 0 });
    } else {
      setFixStyle({ position: 'static' });
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', throttle(() => handleScroll(), 100));
  }, []);
  function renderItem() {
    console.log(data);
    if (!!navItem) {
      return data.map(item => navItem(item));
    }
    return data?.map((item, i) => <div
      key={item.id}
      className={index === i ? styles.tabNavActiveItem : styles.tabNavItem}>
      {item.name}
    </div>);
  }
  return <div
    className={styles.tabNav}
    style={fixStyle}
    ref={navRef}
  >
    {renderItem()}
  </div>
}

export default Nav;