/** @format */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CABIN_STATE {
  editCabinId: number | null;
  showCabinForm: boolean;
}

const initialState: CABIN_STATE = {
  editCabinId: null,
  showCabinForm: false,
};

const cabinSlice = createSlice({
  name: 'cabin',
  initialState,

  reducers: {
    setShowCabinForm: (state) => {
      state.showCabinForm = !state.showCabinForm;
    },

    setEditCabinId: (state, action: PayloadAction<number>) => {
      state.editCabinId = action.payload;
    },

    clearCabinId: (state) => {
      state.editCabinId = null;
    },
  },
});

export const { setEditCabinId, clearCabinId, setShowCabinForm } = cabinSlice.actions;
export const cabinReducers = cabinSlice.reducer;
