import { SxProps } from '@mui/material';
import { ButtonBasic } from '../BasicComponents';

interface ICaseItemProps {
  image: string;
  type: string;
  title: string;
  class: string;
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
  return (
    <div className="skin-wrap">
      <div className={'case-item ' + 'case-item-' + props.class}>
        <img className="case-item__img" src={props.image} alt={props.type} />
        <span className="case-item__type">{props.type}</span>
        <span className="case-item__title">{props.title}</span>
      </div>
      <ButtonBasic className="outlined btn" onClick={() => alert('dddddddddd')} sx={btn}>
        Продать
      </ButtonBasic>
    </div>
  );
};
