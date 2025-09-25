import React from 'react';

interface CardProps {
  titulo: string;
  descricao: string;
  data?: string;
}

const Card: React.FC<CardProps> = ({ titulo, descricao, data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      {data && <p>Data: {data}</p>}
    </div>
  );
};

export default Card;
