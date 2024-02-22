import { hash } from 'bcrypt';
export function makePasswordManagementService() {
  return {
    async hashPassword(password: string): Promise<string> {
      return hash(password, 10);
    },
  };
}
