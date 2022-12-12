import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../store';
import { Case } from '../index';
import { getBackgroundMainBottom } from './../../store/selectors/getSettingsAppearance';
import { CaseSkeleton } from './CaseSkeleton';

interface ICommonBlockInfoProps {
  blockStyle?: React.CSSProperties;
  pStyle?: React.CSSProperties;
  name: string;
}

export const CommonBlockInfo: React.FC<ICommonBlockInfoProps> = ({
  blockStyle,
  pStyle,
  name,
}: ICommonBlockInfoProps) => {
  const { packs, isLoading } = useAppSelector((state) => state.packs);
  const skeletons = [...new Array(4)].map((_, index) => <CaseSkeleton key={index} />)

  return (
    <div className="block" style={blockStyle}>
      <div className="container">
        <p style={pStyle}>{name}</p>
        <div className="block__wrapper">
          {!isLoading ? packs.map((i) => (
            <Case key={i.id} title={i.title} price={i.price} img={i.image} id={i.id} />
          )) : skeletons}
        </div>
      </div>
    </div>
  );
};

export const CommonBlockInfoWithImage: React.FC<ICommonBlockInfoProps> = ({ name }: ICommonBlockInfoProps) => {
  const backgroundMain = useSelector(getBackgroundMainBottom);
  const { packs, isLoading } = useAppSelector((state) => state.packs);
  const skeletons = [...new Array(4)].map((_, index) => <CaseSkeleton key={index} />)
  return (
    <div className="block__image">
      {backgroundMain && (
        <Box
          component="img"
          style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover'}}
          src={`${backgroundMain}`}
          alt="headerImage"
        ></Box>
      )}

      <div className="container">
        <p>{name}</p>
        <div className="block__wrapper">
        {!isLoading ? packs.map((i) => (
            <Case key={i.id} title={i.title} price={i.price} img={i.image} id={i.id} />
          )) : skeletons}
          {/* <Case />
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
          <Case /> */}
        </div>
      </div>
    </div>
  );
};
