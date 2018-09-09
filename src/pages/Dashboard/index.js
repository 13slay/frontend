import React, { PureComponent } from 'react';
import img_1 from '@/assets/dashboard_1.png';

const cover = [{ src: img_1 }];

const CoverItem = props => {
  console.log(props);
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        backgroundImage: `url(${props.src}`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginBottom: 36,
      }}
    />
  );
};

class Dashboard extends PureComponent {
  render() {
    return (
      <div>
        {cover.map(item => (
          <CoverItem src={item.src} key={item.src} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
