import { stringify } from 'qs';
import request from '@/utils/request';
/** hackhone */
const members = [
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
    name: '曲丽丽',
    id: 'member1',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
    name: '王昭君',
    id: 'member2',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
    name: '董娜娜',
    id: 'member3',
  },
];

export async function queryCurrent() {
  return {
    name: '李狗蛋',
    account: web3.eth.coinbase,
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
  };
}

export async function queryProject() {
  return [
    {
      id: 'symc11',
      title: '幼儿园',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      href: 'http://baidu.com',
      percent: 69,
      status: 'active',
      createdAt: '2018-09-28 12:20',
      subDescription: '万向创新城第一附属幼儿园',
      members,
    },
    {
      id: 'symc12',
      title: '办公楼',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      percent: 80,
      status: 'active',
      href: 'http://baidu.com',
      createdAt: '2018-09-28 12:30',
      subDescription: '万向创新城大厦',
      members,
    },
    {
      id: 'symc1e',
      title: '火星第二基地附属医院',
      creator: '火星第二基地',
      // 资产占比
      asset: [
        { type: 'government', ratio: 0.4 },
        { type: 'private', ratio: 0.4 },
        { type: 'community', ratio: 0.2 },
      ],
      process: 0.76,
      // 募集目标
      target: 100000,
      // 募集目标单位
      unit: 'JC',
      // token 总数
      total: 10000,
      // 个人限购
      limit: 100,
      members,
      detail: `
##项目介绍

幼儿园建筑是住宅开发过程中必要的配套设施。在住宅货值最大化原则的驱动下，大部分幼儿园无法脱离被住宅挤压和被规范限制的双重困境，最终以妥协和消极的空间状态呈现。在上海一个典型别墅区环绕的不规则用地内，曼景建筑试图通过设计的策略突破周边环境和建筑规范的双重限制，为孩子们营造一个城市中的理想空间。幼儿园俯瞰形似“∞”，被称为∞幼儿园。

Kindergarten is a necessary supporting facility in the process of housing development. Driven by the principle of maximizing the value of housing, most of the kindergartens can’t be separated from the double predicament of being squeezed by housing and restricted by the building norms; they’re finally presented in the compromising and negative spatial state. In an irregular land encircled by a typical villa area in Shanghai, Office Mass tries to break through the dual restriction of surrounding environment and norms through design strategies to create an ideal space in the city for children. The kindergarten looks like “∞” from aerial view, so it’s called ∞ kindergarten.

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg)

幼儿园的不规则地形、建筑师意将其作为一个1:1的积木的初衷和将建筑从三层降低到主体二层局部三层以减少建筑对人的压迫感的想法，导致用常规的空间布局方式都将是个不可能完成的任务：建筑平面增大，绿地率和活动场地面积难以达到要求；建筑周边场地形状不规则，不利于分班活动场地的划分。建筑师给出的答案是用一个漂浮的班级单元留出底层架空的活动场地；二层环廊形成退台，作为空中花园，增加绿地面积；在余量很小的场地中用圆形母题，铺满场地，形成分班活动场地、器械活动场地、沙水池、跑道等。相切的园环的边界自然形成了入园的环形洗手池、圆环景观路径、和活动场地的边界。简单、统一的形式处理，带来了功能之间最少差异，和可以互相转换的可能性。形式的统一性弱化了形式在设计中的地位，从而保证它跟不规则的地形之间会有更兼容性的衔接。

The irregular site of the kindergarten, the architect’s original intention of making it into a 1:1 building block and the idea of reducing the building from three floors to two floors for main structure and three floors for part of it so as to reduce the sense of pressure all cause that it will be a mission impossible through conventional spatial layout: the increase of building plan makes it hard to meet the requirements on greening area and activity space area; the irregular shape of the surrounding site is not conducive to the division of activity space by classes. The answer given by the architect is to use a floating classroom unit to make space for outdoor activity; the second-floor circular corridor forms stepped terrace as the hanging garden to increase the green area; a circular motif is used in the site with small margin to pave and form the activity space by classes, apparatus activity space, sand pool and runway, etc. The boundary of tangent ring naturally forms the circular washing basin into the garden, circular landscape path and the boundary of activity space. Simple and unified form operation brings about the least difference between functions and the possibility of mutual transformation. The unity of form weakens the position of form in design, so as to ensure that it has more compatible linkup with irregular terrain.

##效果图展示

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd00.jpeg)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd02.jpeg)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd03.jpeg)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd04.jpeg)

##设计图纸

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd0a.jpeg)

![cover](https://qqadapt.qpic.cn/txdocpic/0/fab9afd29ef2488abc47bdc7db81f779/0)

![cover](https://qqadapt.qpic.cn/txdocpic/0/9e55b3d29edd27f20fbf43997c8c2e41/0)

##相关资质

![cover](https://qqadapt.qpic.cn/txdocpic/0/121b10e6cb1170f3604db1e8cadaf96b/0)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd06.jpeg)
      `,
    },
  ];
}
