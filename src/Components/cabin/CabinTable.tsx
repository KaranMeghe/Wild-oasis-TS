/** @format */

import { useFetchCabinsQuery } from '../../Redux/api/cabinsApi';
import type { RootState } from '../../Redux/store';
import TableRow from '../TableRow';
import CabinForm from './CabinForm';
import { useSelector } from 'react-redux';

const CabinTable = () => {
  const { showCabinForm } = useSelector((state: RootState) => state.cabin);

  const { isLoading, data: cabins, isError } = useFetchCabinsQuery();
  if (isLoading) return <p className='text-center'>Loading....</p>;
  if (isError) return <p className='text-center text-red-500'>Failed to Fetch Cabins Data...</p>;
  console.log('Rendering cabins list:', cabins);
  return (
    <>
      <table className='min-w-full table-auto border border-gray-200 shadow-sm rounded-md overflow-hidden my-5 bg-white'>
        <thead className='bg-gray-100 text-gray-700 text-sm font-semibold'>
          <tr>
            <th className='px-4 py-3 text-left border-b'>#</th>
            <th className='px-4 py-3 text-left border-b'>CABIN</th>
            <th className='px-4 py-3 text-left border-b'>CAPACITY</th>
            <th className='px-4 py-3 text-left border-b'>PRICE</th>
            <th className='px-4 py-3 text-left border-b'>DISCOUNT</th>
            <th className='px-4 py-3 text-left border-b'>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {cabins?.map((cabin) => (
            <TableRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>

      {showCabinForm && <CabinForm />}
    </>
  );
};

export default CabinTable;
