export class FailureKpi {
  id: number;
  name: string;
  type: string;

  large: number;
  medium: number;
  small: number;

  critical: number;
  warning: number;
  unhealthy: number;
  healthy: number;

  alarms: number;
}
