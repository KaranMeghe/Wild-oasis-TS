/** @format */

import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../services/supabase';
import type { Cabin } from '../models/cabins.model';

export const cabinsApi = createApi({
  reducerPath: 'cabinsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Cabins'],

  endpoints: (builder) => ({
    fetchCabins: builder.query<Cabin[], void>({
      async queryFn() {
        const { data, error } = await supabase.from('cabins').select('*');
        if (error) return { error };
        return { data };
      },
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: 'Cabins' as const, id })), 'Cabins'] : ['Cabins'],
    }),

    deleteCabin: builder.mutation<{ success: boolean }, number>({
      async queryFn(id) {
        console.log(id);
        const { error } = await supabase.from('cabins').delete().eq('id', id);
        if (error) {
          throw new Error('Cabin could not be deleted');
        }
        return { data: { success: true } };
      },
      invalidatesTags: ['Cabins'],
    }),
  }),
});
export const { useFetchCabinsQuery, useDeleteCabinMutation } = cabinsApi;
