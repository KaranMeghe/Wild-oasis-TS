/** @format */

import { useFetchCabinsQuery } from '../Redux/api/cabinsApi';

function Cabins() {
  const { data } = useFetchCabinsQuery();
  console.log(data);
  return (
    <div className='flex justify-between px-2'>
      <h2>All cabins</h2>
      <p>TEST</p>
    </div>
  );
}

export default Cabins;
