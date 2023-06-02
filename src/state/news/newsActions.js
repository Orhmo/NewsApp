import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch random news
export const fetchRandomNews = createAsyncThunk(
  'news/fetchRandomNews',
  async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=all&apiKey=bd2a5b59b04942898a487f046e580296'
      );
      return response.data.articles;
    } catch (error) {
      throw new Error('Failed to fetch random news.');
    }
  }
);

// Fetch news by source
export const fetchNewsBySource = createAsyncThunk(
  'news/fetchNewsBySource',
  async () => {
    try {
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
    } catch (error) {
      throw new Error('Failed to fetch news by source.');
    }
  }
);

// Fetch trending news
export const fetchTrendingNews = createAsyncThunk(
  'news/fetchTrendingNews',
  async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=ng&apiKey=bd2a5b59b04942898a487f046e580296'
      );
      return response.data.articles;
    } catch (error) {
      throw new Error('Failed to fetch trending news.');
    }
  }
);
