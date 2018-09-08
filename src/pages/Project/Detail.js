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
                style={{ width: '100%' }}
                src="http://7xsuii.com1.z0.glb.clouddn.com/cover01.jpg"
              />
            </Card>

            <br />
            <Card>
              <Tabs defaultActiveKey="1" size="large">
                <Tabs.TabPane tab="Project Information" key="1">
                  <div className={styles.detail}>
                    <ReactMarkdonw source={detail.detail} />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Investment proportion" key="2">
                  <Pie
                    hasLegend
                    data={detail.asset.map(item => ({ x: item.name, y: item.ratio }))}
                    valueFormat={item => item.ratio}
                    lineWidth={1}
                    height={286}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="权益说明" key="3">
                  <div className={styles.detail} />
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xl={8}>
            <Affix offsetTop={64}>
              <Card title="Subscribe rights">
                <p>当前进度: </p>
                <Progress percent={detail.percent} status={detail.status} strokeWidth={6} />
                <br />
                <p>认购限额: {detail.limit}</p>
                <Row type="flex" justify="center" style={{ marginTop: 36 }}>
                  <Col style={{ flex: 8 }}>
                    <Slider
                      min={1}
                      max={detail.limit}
                      onChange={e => this.onChange(e)}
                      value={number}
                    />
                  </Col>
                  <Col style={{ flex: 4 }}>
                    <InputNumber
                      min={1}
                      max={detail.limit}
                      style={{ marginLeft: 16 }}
                      value={number}
                      onChange={e => this.onChange(e)}
                    />
                  </Col>
                  <Button
                    type="primary"
                    block
                    style={{ height: 48, fontSize: 18, marginTop: 16 }}
                    onClick={this.onBuy}
                  >
                    Subscribe
                  </Button>
                </Row>
              </Card>
            </Affix>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Detail;
