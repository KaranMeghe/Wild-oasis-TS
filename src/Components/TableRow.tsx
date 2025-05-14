/** @format */

import type { Cabin } from '../Redux/models/cabins.model';
import { formatCurrency } from '../utils/helpers';

interface CabinProps {
  cabin: Cabin;
}

const TableRow = ({ cabin }: CabinProps) => {
  const { name, maxCapacity, regularPrice, discount, description, image } = cabin;

  return (
    <tr>
      <td className='px-4 py-3 text-left border-b'>
        <img src={image} alt='Cabin image' className='w-18' />
      </td>
      <td className='px-4 py-3 text-left border-b'>{name}</td>
      <td className='px-4 py-3 text-left border-b'>Fits up to {maxCapacity}</td>
      <td className='px-4 py-3 text-left border-b font-semibold'>{formatCurrency(regularPrice)}</td>
      <td className='px-4 py-3 text-left border-b text-green-500'>{formatCurrency(discount)}</td>
      <td className='px-4 py-3 text-left border-b'>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
