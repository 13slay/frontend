import React, { PureComponent } from 'react';
import { find, isEmpty } from 'lodash';
import { connect } from 'dva';
import moment from 'moment';
import { Col, Row, Affix, Card, Button, InputNumber } from 'antd';
import { Pie, MiniProgress } from '@/components/Charts';
import ReactMarkdonw from 'react-markdown';

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
    const firstHeight = 300;
    if (!detail) return null;
    return (
      <PageHeaderWrapper title={detail.name} style={{ marginLeft: 0, marginRight: 0 }}>
        <Row gutter={24}>
          <Col xl={18}>
            <Row gutter={24} style={{ marginBottom: 24 }}>
              <Col xl={12}>
                <Card title="项目信息" bodyStyle={{ height: firstHeight }}>
                  <p>项目名称: {detail.title}</p>
                  <p>项目方: {detail.creator}</p>
                </Card>
              </Col>
              <Col xl={12}>
                <Card title="投资比例" bodyStyle={{ height: firstHeight, padding: 8 }}>
                  <Pie
                    hasLegend
                    data={detail.asset.map(item => ({ x: item.name, y: item.ratio }))}
                    valueFormat={item => item.ratio}
                    lineWidth={1}
                    height={286}
                  />
                </Card>
              </Col>
            </Row>
            <Row style={{ marginBottom: 24 }}>
              <Col xl={24}>
                <Card title="募集进度">
                  <Row type="flex">
                    <p>已参与人数: {detail.process.joined}</p>
                  </Row>
                  <MiniProgress
                    percent={detail.process.percent * 100}
                    strokeWidth={8}
                    target={80}
                    color="#13C2C2"
                  />
                </Card>
              </Col>
            </Row>
            <Card title="项目详情">
              <div className={styles.detail}>
                <ReactMarkdonw source={detail.detail} />
              </div>
            </Card>
          </Col>
          <Col xl={6}>
            <Affix offsetTop={64}>
              <Card title="认购权益">
                <p>权益说明: </p>
                <p>认购限额: {detail.limit}</p>
                <div>
                  认购数量: <InputNumber />
                </div>
                <Button type="primary" block style={{ height: 48, fontSize: 18, marginTop: 36 }}>
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
