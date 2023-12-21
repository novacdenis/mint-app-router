import { Module } from "../enums";

export class TimeRangesQuery {
  farmIds?: number[];
  turbineIds?: number[];
  module: Module;
}
