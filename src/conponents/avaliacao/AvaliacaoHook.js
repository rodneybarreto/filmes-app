import { useEffect, useState } from 'react';

import buscaTodas from './AvaliacaoService';

export default () => {

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const buscaAvaliacoes = () => {
    setIsLoading(true);

    const onSuccess = response => {
      setIsLoading(false);
      if (response.status === 204) {
        setAvaliacoes([]);
      } else {
        setAvaliacoes(response.data);
      }
    }

    const onError = error => {
      console.log(error);
      setIsLoading(false);
      setError({ message: 'Não foi possível carregar as avaliações'});
    }

    buscaTodas(onSuccess, onError);
  }

  useEffect(() => buscaAvaliacoes(), []);
  return [avaliacoes, isLoading, error, buscaAvaliacoes];
}
