import { Component, SubComponent } from "../../entities";
import { Module } from "../../enums";
import { Farm } from "../farms";
import { User } from "../users";

export class Company {
  id: string;
  name: string;
  modules: Module[];
  dataRetentionDays: number;
  hasLogo: boolean;
  createdAt: Date;
  updatedAt: Date;

  users?: User[];
  farms?: Farm[];
  deletedAt?: Date | null;
  allowedComponents?: Component[];
  allowedSubComponents?: SubComponent[];
}
