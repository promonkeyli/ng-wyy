/*轮播图数组类型*/
export type Banners = {
  targetId: number;
  url: string;
  imageUrl: number
}
/*热门歌单数组类型*/
export type HotTags = {
  id: number;
  name: string;
  position: number;
}
/*歌手*/
export type Singer = {
  id: number;
  albumSize: number;
  picUrl: string;
  name: string;
}
/*歌曲*/
export type Song = {
  id: number;
  name: string;
  url: string;
  ar: Singer[]; // 歌曲由哪一些歌手参与
  al: Album;
  dt: number; // 播放时长
}
/*专辑*/
export type Album = {
  id: number;
  name: string;
  picUrl: string;
}
/*歌单*/
export type SongSheets = {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
  tracks: Array<Song>; // 歌曲组成的数组
}
/*歌曲url播放地址*/
export type SongUrl ={
  id: number;
  url: string;
}
