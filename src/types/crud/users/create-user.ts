import { UserRole } from "../../enums";

export class CreateUser {
  companyId: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;

  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
