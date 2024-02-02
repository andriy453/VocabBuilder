import { createSlice } from '@reduxjs/toolkit';
import { logout, register, login, refreshUser } from './operations';

const initialState = {
    name: null,
    errorReg: null,
    errorLog: null,
    isLoading:null,
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
  }

  
const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
      state.errorReg = null;
      state.isLoading = true;
    })
     .addCase(register.fulfilled,(state, action)=> {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(register.rejected,(state, action)=>  {
      state.errorReg = action.payload;
    })

    .addCase(login.pending,(state)=>  {
      state.errorLog = null;
      state.isLoading = true;
    })
    .addCase(login.fulfilled,(state, action)=>  {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(login.rejected,(state, action)=>  {
      state.errorLog = action.payload;
    })

    .addCase(logout.fulfilled,(state)=>  {
      state.name = null
      state.token = null;
      state.isLoggedIn = false;
    })

    .addCase(refreshUser.pending,(state,) => {
      state.isRefreshing = true;
      state.isLoading = true;
    })
    .addCase(refreshUser.fulfilled,(state, action)=>  {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected,(state, action)=>  {
      state.user = action.payload;
      state.isRefreshing = false;
    })
  },
});

export const AuthReducer = AuthSlice.reducer;