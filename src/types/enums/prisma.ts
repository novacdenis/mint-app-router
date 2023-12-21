export type FarmType = "WIND" | "SOLAR" | "HYDROGEN";

export type SizeCategory = "SMALL" | "MEDIUM" | "LARGE";

export type Module =
  | "FAILURE_PREDICTION"
  | "MAINTENANCE_PLANNER"
  | "MONITORING"
  | "UNDERPERFORMANCE_DETECTION"
  | "DATA_HUB";

export type UserRole = "ADMIN" | "GENERAL_MANAGER" | "OM_LEAD" | "TECHNICIAN" | "USER";

export type MaintenanceAction =
  | "MAINTENANCE"
  | "EXCHANGE"
  | "INSPECTION"
  | "REPLACEMENT"
  | "MAJOR_INTERVENTION";

export type MaintenanceStatus = "PLANNED" | "IN_EXAMINATION" | "OPEN" | "DONE";

export type AnnotationCategory =
  | "ABNORMAL_BEHAVIOUR"
  | "CURTAILMENT"
  | "INSPECTION"
  | "MANUAL_STOP"
  | "OTHER";

export type ProductionAnnotationCategory =
  | "ABNORMAL_BEHAVIOUR"
  | "CURTAILMENT"
  | "PLANNED_DOWNTIME"
  | "UNPLANNED_DOWNTIME"
  | "DOWNTIME"
  | "OVERPRODUCTION"
  | "UNDERPRODUCTION"
  | "OTHER";

export type ScadaEventType = "ALARM" | "STATUS";

export type DataHubStatus = "UPLOADED" | "MAPPED" | "PROGRESS" | "COMPLETED" | "ERROR";

export type DataHubFileType = "SCADA_DEFAULT" | "SCADA_COMPACT_RENOM" | "UNSTRUCTURED";

export type ForgottenPasswordType = "FORGOT_PASSWORD" | "INVITE";
