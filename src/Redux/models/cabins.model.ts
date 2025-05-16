/** @format */

export interface Cabin {
  created_at: string;
  description: string;
  discount: number;
  id: number;
  image: undefined | string;
  maxCapacity: number;
  name: number;
  regularPrice: number;
}

export interface CabinProps {
  cabin: Cabin;
}
