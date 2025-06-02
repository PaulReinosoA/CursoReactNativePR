import {HttpAdapter} from '../../../config/adapters/http/Http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movies.entity';

export const nowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log({nowPlaying});
    return [];
  } catch (error) {
    console.log(error);
    throw new Error('error fetching movie - now-Playing');
  }
};
