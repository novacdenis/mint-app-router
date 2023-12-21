import { ForgottenPassword } from "./forgotten-password";
import { Component } from "../../entities";
import { UserRole } from "../../enums";
import { Company } from "../companies";
import { Farm } from "../farms";
import { Turbine } from "../turbines";

export class User {
  id: string;
  email: string;
  companyId: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  role: UserRole;
  hasAvatar: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  company?: Company;
  allowedFarms?: Farm[];
  allowedTurbines?: Turbine[];
  allowedComponents?: Component[];
  forgottenPasswords?: ForgottenPassword[];
}
