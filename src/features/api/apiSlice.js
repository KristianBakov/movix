import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "af2d67dddd21e63ecb9038f63c9333db";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getDiscover: builder.query({
      query: () => `/discover/movie?api_key=${apiKey}&language=en-US`,
    }),
    getTrendingToday: builder.query({
      query: () => `/trending/all/day?api_key=${apiKey}&language=en-US`,
    }),
    getTopRated: builder.query({
      query: () =>
        `/movie/top_rated?api_key=${apiKey}&language=en-US&page=1&region=GB`,
    }),
    getUpcoming: builder.query({
      query: () => `/movie/upcoming?api_key=${apiKey}&page=1&region=GB`,
    }),
    getStudioGhibli: builder.query({
      query: () =>
        `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`,
    }),
    getAsianDramas: builder.query({
      query: () =>
        `/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=35%2C18&include_null_first_air_dates=false&with_original_language=zh%7Cko`,
    }),
    getPopularTvSeries: builder.query({
      query: () =>
        `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&first_air_date.gte=2010-01-01&page=1&without_genres=16&include_null_first_air_dates=false&with_original_language=en`,
    }),
    getMovieDetails: builder.query({
      query: ({ type, id }) =>
        `/${type}/${id}?api_key=${apiKey}&language=en-US`,
    }),
    getCastList: builder.query({
      query: ({ type, id }) => `/${type}/${id}/credits?api_key=${apiKey}`,
    }),
    getTrailer: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/videos?api_key=${apiKey}&language=en-US`,
    }),
    getSimilar: builder.query({
      query: ({ type, id }) =>
        `/${type}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getSearch: builder.query({
      query: ({ query }) =>
        `/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    }),
  }),
});

export const {
  useGetDiscoverQuery,
  useGetTrendingTodayQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetStudioGhibliQuery,
  useGetAsianDramasQuery,
  useGetPopularTvSeriesQuery,
  useGetMovieDetailsQuery,
  useGetCastListQuery,
  useGetTrailerQuery,
  useGetSimilarQuery,
  useGetSearchQuery,
} = apiSlice;
