import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Function to get data from cache
const getFromCache = (key) => {
  const cachedData = localStorage.getItem(key);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  return null;
};

// Function to set data in cache
const setInCache = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fetchNews = async (query, page = 1, pageSize = 21) => {
  const cacheKey = `news_${query}_${page}`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const url = `${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
  const res = await axios.get(url);
  const data = res.data;

  if (data) {
    setInCache(cacheKey, data);
  }

  return data;
};

export const fetchCategoryNews = async (category, page = 1, pageSize = 21) => {
  const cacheKey = `category_${category}_${page}`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const url = `${BASE_URL}/top-headlines?category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
  const res = await axios.get(url);
  const data = res.data;

  if (data) {
    setInCache(cacheKey, data);
  }

  return data;
};

export const fetchTopHeadlines = async (page = 1, pageSize = 21) => {
  const cacheKey = `topHeadlines_${page}`;
  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const url = `${BASE_URL}/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
  const res = await axios.get(url);
  const data = res.data;

  if (data) {
    setInCache(cacheKey, data);
  }

  return data;
};
