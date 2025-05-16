/** @format */

import { formatCurrency } from '../utils/helpers';
import { AiOutlineDelete } from 'react-icons/ai';
import type { CabinProps } from '../Redux/models/cabins.model';
import useHandleCabin from '../Hooks/useHandleCabin';

const TableRow = ({ cabin }: CabinProps) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const { isLoading, handleDeleteCabin } = useHandleCabin();

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
        <button
          onClick={() => handleDeleteCabin(id)}
          className='p-1 bg-red-600 text-white rounded hover:bg-red-700'
          disabled={isLoading}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
