/** @format */

import { useDispatch } from 'react-redux';
import CabinTable from '../Components/cabin/CabinTable';
import { useFetchCabinsQuery } from '../Redux/api/cabinsApi';
import { setShowCabinForm } from '../Redux/slices/cabinSlice';

function Cabins() {
  const dispatch = useDispatch();
  const { data: cabins } = useFetchCabinsQuery();
  console.log(cabins);
  return (
    <>
      <div className='flex flex-col my-10'>
        <div className='w-full flex justify-between items-baseline'>
          <h2 className='text-4xl'>All cabins</h2>
          <div className='flex items-baseline gap-6'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white px-2 py-1  border-0 rounded'
              onClick={() => dispatch(setShowCabinForm())}>
              + Add Cabin
            </button>
            <p>Filter/Sort</p>
          </div>
        </div>
        <CabinTable />
      </div>
    </>
  );
}

export default Cabins;
