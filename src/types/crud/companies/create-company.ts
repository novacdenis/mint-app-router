import { Module } from "../../enums";

export class CreateCompany {
  name: string;
  modules: Module[];

  dataRetentionDays?: number;
}
