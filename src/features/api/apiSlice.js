import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "af2d67dddd21e63ecb9038f63c9333db";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: () => `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    }),
    getDiscover: builder.query({
      query: () => `/discover/movie?api_key=${apiKey}&language=en-US`,
    }),
  }),
});

export const { useGetMovieListQuery, useGetDiscoverQuery } = apiSlice;
