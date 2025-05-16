/** @format */

import toast from 'react-hot-toast';
import { useDeleteCabinMutation } from '../Redux/api/cabinsApi';

const useHandleCabin = () => {
  const [deleteCabin, { isLoading, isSuccess }] = useDeleteCabinMutation();
  const deleteResult = useDeleteCabinMutation();
  console.log(deleteResult);
  // Delete Cabin by id
  const handleDeleteCabin = async (id: number) => {
    try {
      await deleteCabin(id).unwrap();
      toast.success('Cabin deleted successfully');
    } catch (error) {
      console.error('Failed to delete cabin:', error);
      toast.error('Failed to delete the cabin');
    }
  };

  return { handleDeleteCabin, isLoading, isSuccess };
};

export default useHandleCabin;
