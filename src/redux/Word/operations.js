import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../Auth/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { redirect } from "react-router-dom"

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





export const fetchWords = createAsyncThunk(
  "words/all",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      if(category === 'all'){
        const { data } = await instance.get(
          `words/all?keyword=${search}&page=${page}`
        );
        return data;
      }else{
        const { data } = await instance.get(
          `words/all?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
        );
        return data;
      }


    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCategories = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCreate = createAsyncThunk(
  "words/create",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post(`words/create`, body);
      return response.data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAdd = createAsyncThunk(
  "words/add",
  async (wordId, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/add/${wordId}`);
      return data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWords = createAsyncThunk(
  "words/delete",
  async (wordsId, { rejectWithValue }) => {
    try {
      await instance.delete(`words/delete/${wordsId}`);
      return wordsId;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsEdit = createAsyncThunk(
  "words/edit",

  async ({ wordsId, values }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`words/edit/${wordsId}`, {
        ...values,
      });
      return data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAll = createAsyncThunk(
  "words/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/all`);

      return data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsOwn = createAsyncThunk(
  "words/own",
  async ({ page, search, category, verb }, { rejectWithValue }) => {
    try {
      if(category === 'all'){
        const { data } = await instance.get(
          `words/own?keyword=${search}&page=${page}`
        );
        return data;
      }
     else{
      const  { data } = await instance.get(
        `words/own?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}`
      );
      return data;
     }
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsStatistics = createAsyncThunk(
  "words/statistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/statistics`);
      return data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsTasks = createAsyncThunk(
  "words/tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`words/tasks`);
      return response.data;
    } catch (error) {
             notifix(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAnswers = createAsyncThunk(
  "words/answers",
  async (answers, { rejectWithValue }) => {
    try {
        
      const { data } = await instance.post("/words/answers", answers);

      return  data;

    } catch ({message}) {
      Notify.failure(message);

      return rejectWithValue(message);
    }
  }
);