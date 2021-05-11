import * as React from 'react';
import styles from './index.module.less';

export interface PanelProps {
  data: { id: any, list: any };
  tabPanel: any;
}

function Panel({ data: { id, list }, tabPanel }: PanelProps) {
  const renderPanelItem = (data) => {
    const { panelItem } = tabPanel;
    return data?.map(item => panelItem(item, item.id));
  }
  const renderEndItem = () => {
    const { endItem } = tabPanel;
    return <>{endItem ? endItem() : <div className={styles.tabPanelLoading}>到底了~</div>}</>
  }
  return <section className={styles.tabPanelItem}>
    {renderPanelItem(list)}
    {renderEndItem()}
  </section>
}

export default Panel;
