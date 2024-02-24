import { IPasswordHasher } from '@application/common/interfaces';
import { hash , compare} from 'bcrypt';
export function makePasswordHasher(): IPasswordHasher {
  return {
    async hashPassword(password: string): Promise<string> {
      return await hash(password, 10);
    },
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
      return await compare(password, hashedPassword);
    },
  };
}
