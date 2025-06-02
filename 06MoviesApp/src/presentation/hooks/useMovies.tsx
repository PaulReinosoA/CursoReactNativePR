import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movies.entity';
import * as useCase from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  //tanStack query averiguar

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await useCase.nowPlayingUseCase(movieDBFetcher);
  };

  return {};
};
