import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch random news
export const fetchRandomNews = createAsyncThunk(
  'news/fetchRandomNews',
  async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=all&apiKey=a71f53100ce84cbc8fb5fa4718ca2761'
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
        'https://newsapi.org/v2/top-headlines/sources?apiKey=a71f53100ce84cbc8fb5fa4718ca2761'
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
        'https://newsapi.org/v2/top-headlines?country=ng&apiKey=a71f53100ce84cbc8fb5fa4718ca2761'
      );
      return response.data.articles;
    } catch (error) {
      throw new Error('Failed to fetch trending news.');
    }
  }
);
