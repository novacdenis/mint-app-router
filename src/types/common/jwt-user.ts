import { UserRole, Module } from "../enums";

export class JwtUser {
  id: string;
  email: string;
  role: UserRole;
  modules: Module[];

  allowedFarmIds?: number[];
  allowedTurbineIds?: number[];
  allowedComponentIds?: number[];
  allowedSubComponentIds?: number[];
  companyId?: string;
  iat?: number;
  exp?: number;
}
