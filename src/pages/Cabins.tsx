/** @format */

import CabinTable from '../Components/CabinTable';
import { useFetchCabinsQuery } from '../Redux/api/cabinsApi';

function Cabins() {
  const { data: cabins } = useFetchCabinsQuery();
  console.log(cabins);
  return (
    <>
      <div className='flex flex-col my-10'>
        <div className='w-full flex justify-between items-baseline'>
          <h2 className='text-4xl'>All cabins</h2>
          <p>Filter/Sort</p>
        </div>
        <CabinTable />
      </div>
    </>
  );
}

export default Cabins;
