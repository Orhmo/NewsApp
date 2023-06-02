import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch random news
export const fetchRandomNews = createAsyncThunk('news/fetchRandomNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/everything?q=all&apiKey=bd2a5b59b04942898a487f046e580296');
  return response.data.articles; 
});

// Fetch trending news
export const fetchTrendingNews = createAsyncThunk('news/fetchTrendingNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=bd2a5b59b04942898a487f046e580296');
  return response.data.articles; 
});

//
// // News slice
// const newsSlice = createSlice({
//   name: 'news',
//   initialState: {
//     randomNews: [],
//     trendingNews: [], // Initialize trendingNews as an empty array
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRandomNews.fulfilled, (state, action) => {
//         state.randomNews = action.payload;
//       })
//       .addCase(fetchTrendingNews.fulfilled, (state, action) => {
//         state.trendingNews = action.payload; // Extract the 'articles' array from the response
//       });
//   },
// });

// export default newsSlice.reducer;
