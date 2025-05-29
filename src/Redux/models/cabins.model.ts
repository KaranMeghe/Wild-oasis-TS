/** @format */

export interface Cabin {
  created_at: string;
  description: string;
  discount: number;
  id: number;
  image: undefined | string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}

export interface CabinProps {
  cabin: Cabin;
}

export interface CabinFormInputs {
  name: string;
  capacity: number;
  price: number;
  discount: number;
  description: string;
  cabinImg?: FileList;
}

export type NewCabin = Omit<Cabin, 'id' | 'created_at'>;
