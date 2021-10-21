import { Genrelist } from "src/genrelist/entities/genrelist.entity";

export class Genre {
  id?: number;
  name: string;
  genrelist?: Genrelist[];
}
