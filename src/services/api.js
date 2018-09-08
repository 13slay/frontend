import { stringify } from 'qs';
import request from '@/utils/request';
/** hackhone */
export async function queryProject() {
  return [
    {
      key:1,
      id:'symc1e',
      title: '幼儿园',
      logo:'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      href:'http://baidu.com',
      percent: 69,
      status: 'active',
      createdAt:'2018-09-28 12:20',
      subDescription:'万向创新城第一附属幼儿园',
    },
    {
      key:2,
      id:'symc1e',
      title: '办公楼',
      logo:'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      percent: 80,
      status: 'active',
      href:'http://baidu.com',
      createdAt:'2018-09-28 12:30',
      subDescription:'万向创新城大厦',
    },
  ];
}
