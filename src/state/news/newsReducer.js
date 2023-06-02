import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch random news
export const fetchRandomNews = createAsyncThunk('news/fetchRandomNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/everything?q=all&apiKey=bd2a5b59b04942898a487f046e580296');
  return response.data;
});

// Fetch trending news
export const fetchTrendingNews = createAsyncThunk('news/fetchTrendingNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=bd2a5b59b04942898a487f046e580296');
  return response.data;
});

const initialState = {
  randomNews: [],
  trendingNews: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomNews.fulfilled, (state, action) => {
        state.randomNews = action.payload;
        state.loading = false;
      })
      .addCase(fetchRandomNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTrendingNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingNews.fulfilled, (state, action) => {
        state.trendingNews = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrendingNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
