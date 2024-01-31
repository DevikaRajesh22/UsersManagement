import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  adminInfo: localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { _id, name, email, phone,image, token } = action.payload;
      state.userInfo = { _id, name, email, image, phone };
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      localStorage.setItem('token', token);
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    },
    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem('adminInfo', JSON.stringify(action.payload));
    },
    adminLogout: (state, action) => {
      state.adminInfo = null;
      localStorage.removeItem('adminInfo');
    }
  }
});

export const { setCredentials, logout, setAdminCredentials, adminLogout } = authSlice.actions;
export default authSlice.reducer;
