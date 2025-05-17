/** @format */

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAddCabinMutation } from '../Redux/api/cabinsApi';
import type { CabinFormInputs, NewCabin } from '../Redux/models/cabins.model';

const useHandleCabinForm = () => {
  const { register, handleSubmit, reset } = useForm<CabinFormInputs>();
  const [addCabin] = useAddCabinMutation();

  const onSubmit = async (data: CabinFormInputs) => {
    const formattedCabin: NewCabin = {
      name: data.name,
      maxCapacity: data.capacity,
      regularPrice: data.price,
      discount: data.discount,
      description: data.description,
      image: data.cabinImg?.trim() || '',
    };

    try {
      await addCabin(formattedCabin).unwrap();
      toast.success('Cabin Created Successfully');
      reset();
    } catch (error) {
      toast.error('Error adding Cabin');
      console.error('Error adding Cabin', error);
    }
  };

  return { onSubmit, register, handleSubmit };
};

export default useHandleCabinForm;
