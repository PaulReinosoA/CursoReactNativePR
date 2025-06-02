import {AxiosAdapter} from './http/Axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ed3f6cc58429579b06630a21e68075ae',
    language: 'es',
  },
});
