export type Availability = {
  start: string;
  end: string;
};

export type AvailabilityPeriod = Availability & {
  date: string;
  day: string;
};
