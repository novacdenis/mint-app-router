import { ForgottenPasswordType } from "../../enums";

export class ForgottenPassword {
  createdAt: Date | string;
  expiresAt: Date | string;
  isUsed: boolean;
  type: ForgottenPasswordType;
}
