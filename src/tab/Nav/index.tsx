import * as React from 'react';
import { throttle } from '../../utils';
import styles from './index.module.less';

export interface NavProps {
  tabNav: { navItem: (data: Element) => Element; };
  data: any;
  index: any;
}

function Nav({ tabNav: { navItem }, data, index }: NavProps) {
  const { useEffect, useRef } = React;
  const navRef = useRef();
  const fixRef = useRef();
  function handleScroll() {
    const fixDom: HTMLElement = fixRef.current;
    const navDom: HTMLElement = navRef.current;
    const { top } = fixDom.getBoundingClientRect();
    if (top < 0) {
      navDom.style.position = 'fixed';
      navDom.style.top = '0px';
    } else {
      navDom.style.position = 'inherit';
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', throttle(() => handleScroll(), 60));
  }, []);
  function renderItem() {
    if (!!navItem) {
      return data.map(item => navItem(item));
    }
    return data?.map((item, i) => <div
      key={item.id}
      className={index === i ? styles.tabNavActiveItem : styles.tabNavItem}>
      {item.name}
    </div>);
  }
  return <div>
    <div ref={fixRef} />
    <div className={styles.tabNav} ref={navRef}>
      {renderItem()}
    </div>
  </div>
}

export default Nav;