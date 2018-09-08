import React, { PureComponent } from 'react';
import { Card, Button } from 'antd';

class BuyCard extends PureComponent {
  render() {
    const { detail } = this.props;
    return (
      <Card title="股权认购">
        <p>项目名称: {detail.name}</p>
        <p>创建单位: {detail.creator}</p>
        <p>
          募集目标: {detail.target} {detail.unit}
        </p>
        <p>募集总数: {detail.total}</p>
        <p>认购数量: {detail.total}</p>
        <Button type="primary" block style={{ height: 56, fontSize: 18, marginTop: 36 }}>
          认购股权
        </Button>
      </Card>
    );
  }
}

export default BuyCard;
