import { stringify } from 'qs';
import request from '@/utils/request';
/** hackhone */
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
      detail: `
        火星第二基地附属医院是隶属于火星第二基地建设兵团的项目，主要目的是为了第二基地建设兵团家属的看病问题
      `,
    },
  ];
}
