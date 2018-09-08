import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Icon, List } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ProjectList.less';

@connect(({ project, loading }) => ({
  list: project.list,
  loading: loading.models.list,
}))
class CardList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchProjectList',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const { list, loading } = this.props;
    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    const content = 'hello';
    return (
      <PageHeaderWrapper title="卡片列表" content={content} extraContent={extraContent}>
        {list.map(item => {
          return <p>{item.name}</p>;
        })}
      </PageHeaderWrapper>
    );
  }
}

export default CardList;
