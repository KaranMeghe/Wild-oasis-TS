/** @format */

import { useFetchCabinsQuery } from '../Redux/api/cabinsApi';

function Cabins() {
  const { data: cabins } = useFetchCabinsQuery();
  console.log(cabins);
  return (
    <div className='flex justify-between '>
      <h2>All cabins</h2>
      <p>TEST</p>
    </div>
  );
}

export default Cabins;
