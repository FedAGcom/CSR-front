import { Box, Typography } from '@mui/material';
import { ButtonBasic, ModalBasic } from '../../index';
import { CaseItem } from '../../CaseItem/CaseItem';
import { ITradeRequest } from './types';
import { modalStyles } from './styles';

interface IModalProps extends ITradeRequest {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

function TradeRequestsModal({open, onClose, onConfirm, nick, email, tradeUrl, items, num}: IModalProps) {
  return (
    <ModalBasic
      open={open}
      onClose={onClose}
      sx={modalStyles}
    >
      <Box className='content'>
        <Box className='title'>
          <Typography component='span' className='title__text'>Запрос на трейд #{num}</Typography>
        </Box>

        <Box className='info'>
          <Box className='info__item'>
            <Typography component='span' className='info__text'>Ник</Typography>
            <Typography component='span' className='info__text-content'>{nick}</Typography>
          </Box>

          <Box className='info__item'>
            <Typography component='span' className='info__text'>Почта</Typography>
            <Typography component='span' className='info__text-content'>{email}</Typography>
          </Box>
          
          <Box className='info__item'>
            <Typography component='span' className='info__text'>Трейд ссылка</Typography>
            {
              tradeUrl ?
              <Typography component='span' className='info__text-content'>{tradeUrl}</Typography> : 
              <Typography className='info__text-content'>Нет</Typography>
            }
          </Box>
        </Box>

        <Box className='skins'>
          <Typography component='span' className='skins__title'>Скины</Typography>
          <Box className='skins__box'>
            {
              items.map((item, index) => {
                return (
                  <CaseItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    type={item.type}
                    class={item.class}
                  />
                )
              })
            }
          </Box>
        </Box>

        <Box className='buttons'>
          <ButtonBasic className='primary' onClick={onConfirm}>Подтведить отправление</ButtonBasic>
          <ButtonBasic className='outlined' onClick={onClose}>Закрыть</ButtonBasic>
        </Box>
      </Box>
    </ModalBasic>
  )
}

export default TradeRequestsModal;