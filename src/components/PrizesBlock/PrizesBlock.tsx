import { Box, Button, Container, SxProps } from '@mui/material';
import { All, Bonus, Case, Roulette, StarIcon } from '../svg';
import { data } from '../../mocks/prizes';

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
  marginRight: '10px',
  gap: '15px',
  '&:hover': {
    textDecoration: 'initial',
    backgroundColor: '#D2002D',
    boxShadow: 'none',
  },
};

export const PrizeBlock = () => {
  return (
    <Container sx={{ maxWidth: '1130px' }} maxWidth={false}>
      <Box className="win-panel">
        <Box className="sort-block">
          <Button sx={{ ...button }} className="button">
            Лучшее
            <StarIcon />
          </Button>
          <Button sx={{ ...button, backgroundColor: '#3D161E', padding: '0 6px 0 18px' }} className="button">
            Все
            <All className="all" />
          </Button>
        </Box>
        <Box className="prizes-block">
          {data.map((item) => {
            return (
              <Box key={item.id} className={'prizes-block__item ' + item.class}>
                <img className="prizes-block__img" src={item.img} alt="" />
                <span className="prizes-block__title">{item.title}</span>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Button sx={button2}>
          <Bonus />
          Бонусы
        </Button>
        <Button sx={button2}>
          <Roulette />
          Барабан
        </Button>
        <Button sx={{ ...button2, width: '274px' }}>
          <Case />
          Дневной кейс
        </Button>
      </Box>
    </Container>
  );
};
