import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchLoggedInUserOrders,
  updateUser,
  fetchLoggedInUser,
} from './userAPI';

const initialState = {
  status: 'idle',
  userInfo: null, // this info will be used in case of detailed user info, while auth will
  // only be used for loggedInUser id etc checks
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async () => {
    const response = await fetchLoggedInUserOrders();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async () => {
    const response = await fetchLoggedInUser();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update, { getState }) => {
    // Retrieve the current user info from the Redux state
    const currentUserInfo = selectUserInfo(getState());

    // Check for duplicate addresses
    const isDuplicate = currentUserInfo.addresses.some(existingAddress =>
      existingAddress.name === update.name &&
      existingAddress.email === update.email &&
      existingAddress.phone === update.phone &&
      existingAddress.street === update.street &&
      existingAddress.city === update.city &&
      existingAddress.state === update.state &&
      existingAddress.pinCode === update.pinCode
    );

    if (isDuplicate) {
      throw new Error('Duplicate address found!');
    }

    // Proceed with updating the user if it's not a duplicate
    const response = await updateUser(update);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo.orders = action.payload;

      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // earlier there was loggedInUser variable in other slice
        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from logged-in User info
        state.userInfo = action.payload;
      });
  },
});

export const selectUserOrders = (state) => state.user.userInfo.orders;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserInfoStatus = (state) => state.user.status;

// export const { increment } = userSlice.actions;

export default userSlice.reducer;
