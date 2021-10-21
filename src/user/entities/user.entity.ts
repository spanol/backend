import { Gamelist } from "src/gamelist/entities/gamelist.entity";
import { Profile } from "src/profile/entities/profile.entity";

export class User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  cpf: string;
  username: string;
  password: string;
  gamelist?: Gamelist[];
  profiles?: Profile[];
}
