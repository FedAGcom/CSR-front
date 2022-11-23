import { Box, Button, Container, SxProps } from '@mui/material';
import { All, Bonus, Case, Roulette, StarIcon } from '../svg';
import { useSelector } from 'react-redux';
import { getColorButtons, getColorBackgroundTwo } from '../../store/selectors/getSettingsAppearance';
import { useGetLastItemsWonQuery } from '../../store/slices/statisticsSlise';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: '200px',
    height: 'auto',
    marginTop: '-10px',
    zIndex: 5,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    fontSize: '16px',
  },
});

const button: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#B81034',
  width: '72px',
  height: '42px',
  color: 'white',
  borderRadius: '5px',
  textTransform: 'initial',
  marginTop: '1px',
  padding: '0 6px 0 7px',
  fontSize: '12px',
  lineHeight: '15px',
  '&:hover': {
    textDecoration: 'initial',
    backgroundColor: '#D2002D',
    boxShadow: 'none',
  },
};

const button2: SxProps = {
  backgroundColor: '#B81034',
  width: '190px',
  height: '74px',
  color: 'white',
  borderRadius: '10px',
  textTransform: 'initial',
  fontSize: '20px',
  lineHeight: '25px',
  marginTop: '15px',
  marginBottom: '15px',
  marginRight: '10px',
  gap: '15px',
  '&:hover': {
    textDecoration: 'initial',
    backgroundColor: '#D2002D',
    boxShadow: 'none',
  },
};

type TLastWonItems = {
  icon: string | undefined;
  item_id: number;
  item_title: string;
  pack_title?: string;
  rare: string;
  type?: string;
  user_icon?: string;
  user_name?: string;
  class?: string;
};

export const PrizeBlock = () => {
  const serverColorButtons = useSelector(getColorButtons);
  const serverColorBackgroundTwo = useSelector(getColorBackgroundTwo);

  const { data: lastWonItems } = useGetLastItemsWonQuery('');
  console.log(lastWonItems, 'data');

  return (
    <Container sx={{ maxWidth: '1148px' }} maxWidth={false}>
      <Box className="win-panel">
        <Box className="sort-block">
          <Button sx={{ ...button, backgroundColor: serverColorButtons ?? button.backgroundColor }} className="button">
            Лучшее
            <StarIcon />
          </Button>
          <Button sx={{ ...button, backgroundColor: '#3D161E', padding: '0 6px 0 18px' }} className="button">
            Все
            <All className="all" />
          </Button>
        </Box>
        <Box className="prizes-block">
          {lastWonItems?.map((item: TLastWonItems) => {
            return (
              <CustomTooltip
                key={item.item_id}
                title={
                  <React.Fragment>
                    <span>
                      <b>
                        <u>Пак:</u>
                      </b>{' '}
                      {item.pack_title}
                    </span>
                    <span>
                      <b>
                        <u>Тип оружия:</u>
                      </b>{' '}
                      {item.type}
                    </span>
                    <span>
                      <b>
                        <u>Модель:</u>
                      </b>{' '}
                      {item.item_title}
                    </span>
                    <span>
                      <b>
                        <u>Получил:</u>
                      </b>{' '}
                      {item.user_name}
                    </span>
                  </React.Fragment>
                }
                className="tooltip"
                arrow
              >
                <Box className={'prizes-block__item ' + item.rare}>
                  <img className="prizes-block__img" src={item.icon} alt="" />
                  {/* <span className="prizes-block__title">{item.item_title}</span> */}
                  {/* <p className="tooltip">111</p> */}
                </Box>
              </CustomTooltip>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ backgroundColor: serverColorBackgroundTwo }}>
        <Button sx={{ ...button2, backgroundColor: serverColorButtons ?? button2.backgroundColor }}>
          <Bonus />
          Бонусы
        </Button>
        <Button sx={{ ...button2, backgroundColor: serverColorButtons ?? button2.backgroundColor }}>
          <Roulette />
          Барабан
        </Button>
        <Button sx={{ ...button2, backgroundColor: serverColorButtons ?? button2.backgroundColor, width: '274px' }}>
          <Case />
          Дневной кейс
        </Button>
      </Box>
    </Container>
  );
};
