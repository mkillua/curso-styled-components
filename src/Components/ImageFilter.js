import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import outros from '../assets/images/outros.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconTheme } from './UI';

export default (type) => {
  const images = {
    Restaurante: <IconTheme src={alimentacao} alt="restaurante" />,
    Saude: <IconTheme src={saude} alt="saude" />,
    Transporte: <IconTheme src={transporte} alt="transporte" />,
    Utilidades: <IconTheme src={utilidades} alt="utilidades" />,
    Outros: <IconTheme src={outros} alt="Outros" />,
    default: <IconTheme src={outros} alt="outros" />,
  };

  return images[type] || images.default;
}