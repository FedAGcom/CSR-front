import React from 'react';
import { Case } from '../index';

interface ICommonBlockInfoProps {
  blockStyle?: React.CSSProperties;
  pStyle?: React.CSSProperties;
  name: string;
}

export const CommonBlockInfo: React.FC<ICommonBlockInfoProps> = ({ blockStyle, pStyle, name }) => {
  return (
    <div className="block" style={blockStyle}>
      <div className="container">
        <p style={pStyle}>{name}</p>
        <div className="block__wrapper">
          <Case />
          {/* <div className="block__item">111</div> */}
          <Case />
          <Case />
          <Case />
        </div>
      </div>
    </div>
  );
};

export const CommonBlockInfoWithImage: React.FC<ICommonBlockInfoProps> = ({ name }) => {
  return (
    <div className="block__image">
      <div className="container">
        <p>{name}</p>
        <div className="block__wrapper">
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
        </div>
      </div>
    </div>
  );
};