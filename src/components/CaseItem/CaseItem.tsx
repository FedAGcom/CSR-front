import { SxProps } from '@mui/material';
import { useState } from 'react';
import { ButtonBasic } from '../BasicComponents';
import { ConfirmSkinSaleModal } from '../ConfirmSkinSaleModal/ConfirmSkinSaleModal';

interface ICaseItemProps {
  image: string;
  type: string;
  title: string;
  class: string;
  price: number;
  disabled?: boolean;
}

const btn: SxProps = {
  boxSizing: 'border-box',
  position: 'absolute',
  color: '#B81034',
  width: '105px',
  height: '39px',
  top: '30px',
  left: '23px',
  border: '1px solid #B81034',
  borderRadius: '10px',
  '&:hover': {
    textDecoration: 'initial',
    color: '#FFFFFF',
    border: '1px solid #D2002D',
    backgroundColor: '#B81034',
  },
};

export const CaseItem: React.FC<ICaseItemProps> = (props: ICaseItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState<null | { name: string; price: number }>({
    name: props.title,
    price: props.price,
  });

  function onConfirmSale() {
    console.log('Продажа подтверждена');
    setIsOpen(false);
  }

  return (
    <div className={'skin-wrap' + ' ' + (props.disabled ? 'disabled' : '')}>
      <div className={'case-item ' + 'case-item-' + props.class + ' ' + (props.disabled ? 'disabled' : '')}>
        <img className="case-item__img" src={props.image} alt={props.type} />
        <span className="case-item__type">{props.type}</span>
        <span className="case-item__title">{props.title}</span>
      </div>
      {!props.disabled && (
        <>
          <ButtonBasic className="outlined btn" onClick={() => setIsOpen(true)} sx={btn}>
            Продать
          </ButtonBasic>

          <ConfirmSkinSaleModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={onConfirmSale}
            skinName={`${selectedSkin?.name ?? ''}`}
            price={selectedSkin?.price ?? 0}
          />
        </>
      )}
    </div>
  );
};

CaseItem.defaultProps = {
  disabled: true,
};
