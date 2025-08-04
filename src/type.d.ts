export interface Training {
  date: string;
  topic: string;
  session: string;
  description: string;
  cost: number;
  spotsAvailable: number;
  registrationLink?: string;
}
