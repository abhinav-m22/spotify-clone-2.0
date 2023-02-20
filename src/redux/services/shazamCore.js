import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'a9ddbb921fmshfc5281f9470b83ep19d988jsndedcbe6d52e5');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({ query : ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getRelatedSong: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) =>`/charts/country/?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;