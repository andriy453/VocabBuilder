
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const notifix = (errorCode) => {
    let errorMessage = "An unexpected error occurred. Please try again.";
  
    if (errorCode === 400) {
      errorMessage = "Bad request. Please check your input.";
    } else if (errorCode === 401) {
      errorMessage = "Email or password invalid. Please check your credentials.";
    } else if (errorCode === 404) {
      errorMessage =
        "Service not found. The requested resource could not be located.";
    } else if (errorCode === 409) {
      errorMessage = "Such email already exists. Please use a different email.";
    } else if (errorCode === 500) {
      errorMessage =
        "Server error. Something went wrong on our end. Please try again later.";
    }
  
    Notify.failure(errorMessage);
  };
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        notifix(error.message, error.response?.status);
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/signin', credentials);
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        notifix(error.message, error.response?.status);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        await axios.post('/users/logout');
        clearAuthHeader();
      } catch (error) {
        notifix(error.message, error.response?.status);
        return rejectWithValue(error.message);
        
      }
    }
  );
  
  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        notifix(error.message, error.response?.status);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );