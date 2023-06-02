import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch random news
export const fetchRandomNews = createAsyncThunk(
  'news/fetchRandomNews',
  async () => {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=all&apiKey=bd2a5b59b04942898a487f046e580296'
    );
    return response.data;
  }
);

// Fetch news by source
export const fetchNewsBySource = createAsyncThunk(
  'news/fetchNewsBySource',
  async () => {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines/sources?apiKey=bd2a5b59b04942898a487f046e580296'
    );

    const categories = Array.from(
      new Set(response.data.sources.map((source) => source.category))
    );

    return {
      newsBySource: response.data.sources,
      categories: categories,
    };
  }
);

// Fetch trending news
export const fetchTrendingNews = createAsyncThunk(
  'news/fetchTrendingNews',
  async () => {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=ng&apiKey=bd2a5b59b04942898a487f046e580296'
    );
    return response.data;
  }
);

const initialState = {
  randomNews: [],
  trendingNews: [],
  newsBySource: [],
  categories: [],
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
      .addCase(fetchNewsBySource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsBySource.fulfilled, (state, action) => {
        state.newsBySource = action.payload.newsBySource;
        state.categories = action.payload.categories;
        state.loading = false;
      })
      .addCase(fetchNewsBySource.rejected, (state, action) => {
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
