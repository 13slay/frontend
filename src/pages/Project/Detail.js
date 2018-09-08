import React, { PureComponent } from 'react';
import { find, isEmpty } from 'lodash';
import { connect } from 'dva';
import { Col, Row, Affix, Card, Button, Icon, List } from 'antd';

import BuyCard from './BuyCard';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ProjectDetail.less';

const detailSelector = (id, list) => {
  return find(list, item => item.id === id);
};
@connect(({ project }) => ({
  list: project.list,
  detail: detailSelector(project.current, project.list),
}))
class Detail extends PureComponent {
  componentDidMount() {
    const { dispatch, match, list } = this.props;
    const { id } = match.params;
    if (isEmpty(list)) {
      dispatch({
        type: 'project/fetchProjectList',
      });
    }
    dispatch({
      type: 'project/saveCurrent',
      payload: id,
    });
  }

  render() {
    const { detail, list } = this.props;
    if (!detail) return null;
    return (
      <PageHeaderWrapper title={detail.name} style={{ marginLeft: 0, marginRight: 0 }}>
        <Row gutter={24}>
          <Col xl={14}>
            <Card title="项目详情">{detail.detail}</Card>
          </Col>
          <Col xl={10}>
            <Affix offsetTop={64}>
              <BuyCard detail={detail} />
            </Affix>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Detail;
