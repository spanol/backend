import { Genrelist } from 'src/genrelist/entities/genrelist.entity';
import { User } from 'src/user/entities/user.entity';

export class Game {
  id: number;
  title: string;
  description: string;
  gamecover: string;
  year: number;
  nota: number;
  trailerurl?: string | null;
  gameplayurl?: string | null;
  user?: User[];
  genre?: Genrelist[];
}
// talvez essa conexao de User[] esja problematica
