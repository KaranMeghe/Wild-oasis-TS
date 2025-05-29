/** @format */

import { Input } from '../../ui';
import useHandleCabinForm from '../../Hooks/useHandleCabinForm';
import { useDispatch } from 'react-redux';
import { clearCabinId } from '../../Redux/slices/cabinSlice';
import type { CabinProps } from '../../Redux/models/cabins.model';

const EditCabinForm = ({ cabin }: CabinProps) => {
  const { register, handleSubmit, onSubmit, onError, getValues, errors } = useHandleCabinForm();
  const dispatch = useDispatch();
  const { name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <form
      className='p-6 border rounded-md border-gray-300 w-[60%] mx-auto bg-white shadow-sm'
      onSubmit={handleSubmit(onSubmit, onError)}>
      <div className='flex flex-col gap-5'>
        <div className='flex-1 space-y-5'>
          {/* Cabin Name  */}
          <div className='flex flex-col space-y-1'>
            <label htmlFor='name' className='text-sm font-medium text-gray-700'>
              Cabin Name
            </label>
            <Input
              type='text'
              id='name'
              defaultValue={name}
              {...register('name', {
                required: 'This Field is Required',
                minLength: {
                  value: 4,
                  message: 'Cabin Name must be at least 4 characters long',
                },
              })}
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors?.name?.message && <p className='text-red-400'>{errors?.name?.message}</p>}
          </div>

          {/* Max Capacity */}
          <div className='flex flex-col space-y-1'>
            <label htmlFor='capacity' className='text-sm font-medium text-gray-700'>
              Maximum Capacity
            </label>
            <Input
              type='number'
              id='capacity'
              defaultValue={maxCapacity}
              {...register('capacity', {
                valueAsNumber: true,
                required: 'This Field is Required',
                min: { value: 1, message: 'Capacity should at least 1' },
              })}
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors?.capacity?.message && <p className='text-red-500'>{errors?.capacity?.message}</p>}
          </div>

          {/* Regular Price */}
          <div className='flex flex-col space-y-1'>
            <label htmlFor='price' className='text-sm font-medium text-gray-700'>
              Regular Price
            </label>
            <Input
              id='price'
              type='number'
              defaultValue={regularPrice}
              {...register('price', {
                valueAsNumber: true,
                required: 'This Field is Required',
                min: { value: 999, message: 'Min Cabin price is 999' },
              })}
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors?.price?.message && <p className='text-red-500'>{errors?.price?.message}</p>}
          </div>

          {/* Dsicount */}
          <div className='flex flex-col space-y-1'>
            <label htmlFor='discount' className='text-sm font-medium text-gray-700'>
              Discount
            </label>
            <Input
              type='number'
              id='discount'
              defaultValue={discount}
              {...register('discount', {
                valueAsNumber: true,
                required: 'This Field is Required',
                validate: (value) => value < getValues().price || 'Discount Should be less than regular price',
              })}
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors?.discount?.message && <p className='text-red-500'>{errors?.discount?.message}</p>}
          </div>
        </div>

        {/* Description */}
        <div className='flex-1 space-y-5'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='description' className='text-sm font-medium text-gray-700'>
              Description for cabin
            </label>
            <textarea
              rows={4}
              id='description'
              defaultValue={description}
              {...register('description', { required: 'This Field is Required' })}
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'></textarea>
            {errors?.description?.message && <p className='text-red-500'>{errors?.description?.message}</p>}
          </div>

          {/* Cabin Image */}
          <div className='flex flex-col space-y-1'>
            <label htmlFor='cabinImg' className='text-sm font-medium text-gray-700'>
              Cabin Image (URL or upload)
            </label>
            {/* Optional: Add a file input if you want to upload instead */}
            <input
              type='file'
              accept='image/*'
              id='cabinImg'
              {...register('cabinImg', { required: true })}
              //   placeholder='https://example.com/image.jpg'
              className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <img src={image} alt='Cabin preview' className='w-32 h-20 object-cover mt-2 rounded-md border' />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='pt-6 flex justify-end space-x-3'>
        <button
          type='reset'
          className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition'
          onClick={() => dispatch(clearCabinId())}>
          Cancel
        </button>
        <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditCabinForm;
