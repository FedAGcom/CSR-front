import { Box, SxProps } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../store';
import { getBackgroundCase } from '../../../store/selectors/getSettingsAppearance';
import { CaseItem } from '../../CaseItem/CaseItem';


export const CaseContent = () => {
  const { packItemsList } = useAppSelector((state) => state.packSlice);
  const serverBackgroundCase = useSelector(getBackgroundCase);

  const bg: SxProps = {
    minHeight: '707px',
    position: 'relative',
    "&::before": {
      content: "''",
      position: 'absolute',
      width: '1440px',
      height: '707px',
      left: '-165px',
      zIndex: '0',
      background: `url(${serverBackgroundCase}) center no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }

  return (
    <Box sx={bg} className="case-content__wraper">
      <h5 className="case-content__title">Содержимое кейса</h5>
      <div className="custom-grid">
        {packItemsList.map((i) => {
          return (
            <CaseItem key={i.id} class={i.rare} image={i.iconItemId} type={i.type} title={i.title} content={true} />
          );
        })}
      </div>
    </Box>
  );
};
