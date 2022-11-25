import { useAppSelector } from '../../../store';
import { caseImage } from '../../images';

interface ICaseRefillBanner {
  price: number;
  balance: number;
}

export const CaseRefillBanner = ({price, balance} : ICaseRefillBanner) => {
  const { image } = useAppSelector((state) => state.packSlice);
  return (
    <div className="case-auth-banner">
      <img className="case-auth-banner__img" src={image ? image : caseImage} alt="" />
      <div className="case-auth-banner__wrap">
        <h5 className="case-auth-banner__title">{`${price?.toLocaleString('ru')} ₽ - НЕ ХВАТАЕТ ${(price - balance)?.toLocaleString('ru')} ₽`}</h5>
        <p className="case-auth-banner__content">Недостаточно средств для открытия кейса</p>
      </div>
    </div>
  );
};
