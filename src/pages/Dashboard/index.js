import React, { PureComponent } from 'react';
import img_1 from '@/assets/dashboard_1.png';
import img from '@/assets/dashboard.png';

const cover = [{ src: img }, { src: img_1 }];

const CoverItem = props => {
  console.log(props);
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 60px)',
        backgroundImage: `url(${props.src}`,
        backgroundSize: '100% auto',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

class Dashboard extends PureComponent {
  render() {
    return (
      <div style={{ margin: -30 }}>
        {cover.map(item => (
          <CoverItem src={item.src} key={item.src} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
