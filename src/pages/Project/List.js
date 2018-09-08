import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Icon, List, Avatar, Progress } from 'antd';
import moment from 'moment';
import Link from 'umi/link';

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
    const ListContent = ({ data: { owner, createdAt, percent, status } }) => (
      <div className={styles.listContent}>

        <div className={styles.listContentItem}>
          <span>开始时间</span>
          <p>{moment(createdAt).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className={styles.listContentItem}>
          <Progress percent={percent} status={status} strokeWidth={6} style={{ width: 180 }} />
        </div>
      </div>
    );
    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );
    console.log('list:',list)
    return (
      <PageHeaderWrapper title="项目列表" >
        <List
          size="large"
          rowKey="key"
          style={{background: "#fff",padding: "16px"}}
          loading={loading}
          dataSource={list}
          renderItem={item => (
                        <List.Item
                          actions={[
                            <Link to='/project/detail/symc1e'>
                              参投
                            </Link>
                          ]}
                        >
                          <List.Item.Meta
                            avatar={<Avatar src={item.logo} shape="square" size="large" />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.subDescription}
                          />
                          <ListContent data={item} />
                        </List.Item>
                      )}
        />
      </PageHeaderWrapper>
    );
  }
}

export default CardList;
