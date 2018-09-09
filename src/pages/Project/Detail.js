import React, { PureComponent } from 'react';
import router from 'umi/router';
import { find, isEmpty } from 'lodash';
import { connect } from 'dva';
import moment from 'moment';
import { Col, Row, Affix, Card, Button, InputNumber, Slider, Tabs, Progress } from 'antd';
import { Pie } from '@/components/Charts';
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
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  componentDidMount() {
    const { dispatch, match, list } = this.props;
    const { id } = match.params;
    if (isEmpty(list)) {
      dispatch({ type: 'project/fetchProjectList' });
    }
    dispatch({ type: 'project/saveCurrent', payload: id });
  }

  onChange = value => {
    const { dispatch } = this.props;
    dispatch({ type: 'saveNumber', payload: value });
    this.setState({ number: value });
  };

  onBuy = () => {
    const { dispatch, detail } = this.props;
    const { number } = this.state;
    const callback = (err, txHash) => {
      if (err) {
        dispatch({ type: 'project/saveResult', payload: err });
        router.push('/result/fail');
        return false;
      }
      dispatch({ type: 'project/saveResult', payload: { txHash } });
      router.push('/result/success');
    };
    dispatch({
      type: 'project/buy',
      payload: {
        number,
        crowdAddress: detail.crowdAddress,
        callback,
      },
    });
  };

  render() {
    const { detail, list } = this.props;
    const { number } = this.state;
    const firstHeight = 300;
    if (!detail) return null;
    return (
      <PageHeaderWrapper title={detail.name} style={{ marginLeft: 0, marginRight: 0 }}>
        <Row gutter={24}>
          <Col xl={16}>
            <Card title={detail.title} bodyStyle={{ padding: 0 }}>
              <img
                style={{ width: '100%', height: 600, objectFit: 'cover' }}
                src="http://7xsuii.com1.z0.glb.clouddn.com/cover01.jpg"
              />
            </Card>

            <br />
            <Card>
              <Tabs defaultActiveKey="1" size="large">
                <Tabs.TabPane tab="项目详情" key="1">
                  <div className={styles.detail}>
                    <ReactMarkdonw source={detail.detail} />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="项目信息" key="2">
                  <Row>
                    <Col span={12}>
                      <div style={{ display: 'flex', marginBottom: 24 }}>
                        <span style={{ flex: '0 0 80px' }}>项目名称:</span>
                        {detail.title}
                      </div>
                      <div style={{ display: 'flex', marginBottom: 24 }}>
                        <span style={{ flex: '0 0 80px' }}>项目描述:</span>
                        {detail.subDescription}
                      </div>
                      <div style={{ display: 'flex', marginBottom: 24 }}>
                        <span style={{ flex: '0 0 80px' }}>开始时间:</span>
                        {detail.createdAt}
                      </div>
                      <div style={{ display: 'flex', marginBottom: 24 }}>
                        <span style={{ flex: '0 0 80px' }}>截止时间:</span>
                        {detail.endAt}
                      </div>
                    </Col>
                    <Col span={12}>
                      <Pie
                        hasLegend
                        data={detail.asset.map(item => ({ x: item.name, y: item.ratio }))}
                        valueFormat={item => item.ratio}
                        lineWidth={1}
                        height={286}
                      />
                    </Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="权益说明" key="3">
                  {detail.rules.map((item, index) => (
                    <p key={'rules-tab-' + index}>{item}</p>
                  ))}
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xl={8}>
            <Affix offsetTop={64}>
              <Card title="权益认购">
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>凭证合约:</span>
                  {detail.crowdAddress}
                </div>
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>凭证总额:</span>
                  {detail.total}
                </div>
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>凭证标示:</span>
                  {detail.code}
                </div>
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>认购单价:</span>
                  {detail.price}
                  {detail.unit}
                </div>
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>认购限额:</span>
                  {detail.limit}
                </div>
                <div style={{ display: 'flex', marginBottom: 24 }}>
                  <span style={{ flex: '0 0 80px' }}>当前进度:</span>
                  <Progress
                    percent={detail.process.percent * 100}
                    status={detail.status}
                    strokeWidth={6}
                  />
                </div>
                <div style={{ marginTop: 36 }}>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'stretch',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ flex: '0 0 80px' }}>认购数量:</span>
                    <Slider
                      style={{ flex: 9 }}
                      min={1}
                      max={detail.limit}
                      onChange={e => this.onChange(e)}
                      value={number}
                    />
                    <InputNumber
                      style={{ flex: 3 }}
                      min={1}
                      max={detail.limit}
                      style={{ marginLeft: 16 }}
                      value={number}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                  <Button
                    type="primary"
                    block
                    style={{ height: 48, fontSize: 18, marginTop: 16 }}
                    onClick={this.onBuy}
                  >
                    Subscribe
                  </Button>
                </div>
              </Card>
            </Affix>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Detail;
