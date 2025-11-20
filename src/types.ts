// See original types.ts file for content. 
// Copy content from chat history here if missing in local dev.
export enum BusStatus {
  ON_ROUTE = 'On Route',
  IDLE = 'Idle',
  DELAYED = 'Delayed',
  MAINTENANCE = 'Maintenance',
  COMPLETED = 'Completed'
}
export enum StudentStatus {
  ON_BUS = 'On Bus',
  OFF_BUS = 'Off Bus',
  ABSENT = 'Absent',
  UNKNOWN = 'Unknown'
}
export type SubscriptionTier = 'BASIC' | 'PROFESSIONAL' | 'ENTERPRISE';
export type VehicleType = 'Standard Bus' | 'Activity Bus' | 'Shuttle' | 'Wheelchair Van' | 'Electric Bus';
// ... Add remaining types from chat history
