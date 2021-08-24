/**轮播图数组类型**/
export type Banners = {
  targetId: number;
  url: string;
  imageUrl: number
}
/**热门歌单数组类型**/
export type HotTags = {
  id: number;
  name: string;
  position: number;
}
/**推荐歌单**/
export type SongSheets = {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}
