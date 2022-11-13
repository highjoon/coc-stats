export interface IUnit {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}

export interface IProps {
  troops: Array<IUnit>;
}
