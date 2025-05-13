/** @format */

import { createApi } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../services/supabase';
import type { Cabin } from '../models/cabins.model';

//Custom base query. using Supabase client to fetch data directly.
const supabaseBaseQuery = async () => {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) return { error };
  return { data };
};

export const cabinsApi = createApi({
  reducerPath: 'cabinsApi',
  baseQuery: supabaseBaseQuery,
  endpoints: (builder) => ({
    fetchCabins: builder.query<Cabin[], void>({
      query: () => undefined,
    }),
  }),
});

export const { useFetchCabinsQuery } = cabinsApi;
