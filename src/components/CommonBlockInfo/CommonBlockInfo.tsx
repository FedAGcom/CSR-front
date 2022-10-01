import React from 'react';

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
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
        </div>
      </div>
    </div>
  );
};

export const CommonBlockInfoWithBack: React.FC<ICommonBlockInfoProps> = ({ name }) => {
  return (
    <div className="block__image">
      <div className="container">
        <p>{name}</p>
        <div className="block__wrapper">
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
          <div className="block__item">111</div>
        </div>
      </div>
    </div>
  );
};
