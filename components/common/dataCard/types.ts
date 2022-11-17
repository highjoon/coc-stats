export interface Iprops {
  tag: string;
  rank: number;
  imgUrl?: string;
  name: string;
  level: number;
  members?: number;
  points?: number;
  donations?: number;
  donationsReceived?: number;
  role?: string;
  onClickHandler: (tag: string) => void;
}
