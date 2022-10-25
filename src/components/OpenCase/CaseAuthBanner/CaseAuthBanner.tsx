import { caseImage } from '../../images';

export const CaseAuthBanner = () => {
  return (
    <div className="case-auth-banner">
      <img className="case-auth-banner__img" src={caseImage} alt="" />
      <div className="case-auth-banner__wrap">
        <h5 className="case-auth-banner__title">ВЫ НЕ АВТОРИЗОВАНЫ!</h5>
        <p className="case-auth-banner__content">Для открытия кейсов необходимо пройти авторизацию</p>
      </div>
    </div>
  );
};
