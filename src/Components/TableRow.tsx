/** @format */

import { formatCurrency } from '../utils/helpers';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';
import type { CabinProps } from '../Redux/models/cabins.model';
import useHandleCabin from '../Hooks/useHandleCabin';
import useEditCabinForm from '../Hooks/useEditCabinForm';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/store';
import EditCabinForm from './cabin/EditCabinForm';

const TableRow = ({ cabin }: CabinProps) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const { isLoading, handleDeleteCabin } = useHandleCabin();
  const { handleEdit, handleCloseEdit } = useEditCabinForm();
  const { editCabinId } = useSelector((state: RootState) => state.cabin);

  return (
    <>
      <tr className='hover:bg-gray-50 transition'>
        <td className='px-4 py-3 text-left border-b'>
          <img src={image} alt='Cabin' className='w-20 h-14 object-cover rounded-md' />
        </td>
        <td className='px-4 py-3 text-left border-b font-medium'>{name}</td>
        <td className='px-4 py-3 text-left border-b text-sm text-gray-600'>Fits up to {maxCapacity}</td>
        <td className='px-4 py-3 text-left border-b font-semibold text-gray-800'>{formatCurrency(regularPrice)}</td>
        <td className='px-4 py-3 text-left border-b text-green-600 font-semibold'>{formatCurrency(discount)}</td>
        <td className='px-4 py-3 text-left border-b '>
          {/* Edit and CancelEdit Buttons (Toggle) */}
          {editCabinId !== id ? (
            <button
              onClick={() => handleEdit(id)}
              className={`p-2 mx-4 bg-green-600  hover:bg-green-700 text-white rounded transition`}
              disabled={isLoading}>
              <AiOutlineEdit />
            </button>
          ) : (
            <button
              onClick={() => handleCloseEdit()}
              className='p-2 mx-4 bg-red-600 text-white rounded hover:bg-red-700 transition'
              disabled={isLoading}>
              <AiOutlineClose />
            </button>
          )}

          {/* Delete Button */}
          <button
            onClick={() => handleDeleteCabin(id)}
            className='p-2 bg-red-600 text-white rounded hover:bg-red-700 transition'
            disabled={isLoading}>
            <AiOutlineDelete />
          </button>
        </td>
      </tr>

      {editCabinId === id && (
        <tr>
          <td colSpan={6} className='bg-gray-50 p-4 border-t'>
            <EditCabinForm cabin={cabin} />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
