export interface IUnitCardProps {
  troops: Array<{
    name: string;
    level: number;
    maxLevel: number;
    village: string;
    superTroopIsActive?: boolean;
  }>;
}
