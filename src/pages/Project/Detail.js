import React, { PureComponent } from 'react';
import { find, isEmpty } from 'lodash';
import { connect } from 'dva';
import { Col, Row, Affix, Card, Button, Icon, List } from 'antd';
import { Pie, MiniProgress } from '@/components/Charts';

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
          <Col xl={18}>
            <Row gutter={24} style={{ marginBottom: 24 }}>
              <Col xl={8}>
                <Card title="项目信息">
                  <p>项目名称: {detail.title}</p>
                  <p>项目方: {detail.creator}</p>
                </Card>
              </Col>
              <Col xl={8}>
                <Card title="投资比例">
                  <Pie
                    hasLegend
                    data={detail.asset.map(item => ({ x: item.type, y: item.ratio }))}
                    valueFormat={item => item.ratio}
                    lineWidth={4}
                  />
                </Card>
              </Col>
              <Col xl={8}>
                <Card title="募集进度">
                  <MiniProgress
                    percent={detail.process * 100}
                    strokeWidth={8}
                    target={80}
                    color="#13C2C2"
                  />
                </Card>
              </Col>
            </Row>
            <Card title="项目详情">{detail.detail}</Card>
          </Col>
          <Col xl={6}>
            <Affix offsetTop={64}>
              <Card title="认购权益">
                <p>权益说明: </p>
                <p>认购数量: {detail.total}</p>
                <Button type="primary" block style={{ height: 56, fontSize: 18, marginTop: 36 }}>
                  认购股权
                </Button>
              </Card>
            </Affix>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Detail;
