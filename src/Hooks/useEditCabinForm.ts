/** @format */

import { useForm, type FieldErrors } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAddCabinMutation } from '../Redux/api/cabinsApi';
import type { CabinFormInputs, NewCabin } from '../Redux/models/cabins.model';
import { supabase } from '../services/supabase';
import { useDispatch } from 'react-redux';
import { clearCabinId, setEditCabinId } from '../Redux/slices/cabinSlice';

const useHandleCabinForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<CabinFormInputs>();

  const [addCabin] = useAddCabinMutation();

  const onSubmit = async (data: CabinFormInputs) => {
    let imageUrl = '';

    try {
      // Upload image to Supabase Storage
      const imageFile = data.cabinImg?.[0];

      if (imageFile && imageFile instanceof File) {
        const fileName = `cabin-${Date.now()}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage.from('cabin-images').upload(fileName, imageFile);

        if (uploadError) {
          toast.error('Image upload failed');
          console.error('Upload Error:', uploadError);
          return;
        }

        //  Get public URL of uploaded image
        const { data: publicUrlData } = supabase.storage.from('cabin-images').getPublicUrl(fileName);

        if (!publicUrlData?.publicUrl) {
          toast.error('Failed to get image URL');
          console.error('URL Error: Public URL is missing');
          return;
        }

        imageUrl = publicUrlData.publicUrl;
      }

      // Format and submit cabin data
      const formattedCabin: NewCabin = {
        name: data.name,
        maxCapacity: data.capacity,
        regularPrice: data.price,
        discount: data.discount,
        description: data.description,
        image: imageUrl,
      };

      await addCabin(formattedCabin).unwrap();
      toast.success('Cabin Created Successfully');
      reset();
    } catch (error) {
      toast.error('Error adding Cabin');
      console.error('Error adding Cabin:', error);
    }
  };

  const handleEdit = (id: number) => {
    dispatch(setEditCabinId(id));
  };

  const handleCloseEdit = () => {
    dispatch(clearCabinId());
  };

  const onError = (errors: FieldErrors<CabinFormInputs>) => {
    console.log(errors);
  };

  return { onSubmit, register, handleSubmit, handleEdit, handleCloseEdit, onError, getValues, errors };
};

export default useHandleCabinForm;
