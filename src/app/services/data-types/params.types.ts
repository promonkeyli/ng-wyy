// 歌手接口请求参数类型
export type SingerParams = {
  offset: number; // 分页-第几页
  limit: number; // 分页-数量
  type?: number ; // 歌手类型
  area?: number; // 歌手所属地区
}

