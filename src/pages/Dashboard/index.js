import React, { PureComponent } from 'react';

const cover = [
  { src: ' http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg ' },
  { src: ' http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg ' },
  { src: ' http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg ' },
  { src: ' http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg ' },
];

const CoverItem = props => {
  console.log(props);
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        backgroundImage: `url(${props.src}`,
        backgroundSize: 'center',
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
