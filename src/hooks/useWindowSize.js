// src/hooks/useWindowSize.js

import { useState, useEffect } from 'react';

function useWindowSize() {
  // 1. Inicializa o estado com a largura e altura da janela
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 2. Cria uma função para ser chamada quando a janela for redimensionada
    function handleResize() {
      // Atualiza o estado com as novas dimensões
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez (na montagem e desmontagem)

  return windowSize;
}

export default useWindowSize;