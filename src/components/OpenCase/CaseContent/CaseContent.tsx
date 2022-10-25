import { caseData } from '../../../mocks/open-case';
import { CaseItem } from '../../CaseItem/CaseItem';

export const CaseContent = () => {
  return (
    <div className="case-content__wraper">
      <h5 className="case-content__title">Содержимое кейса</h5>
      <div className="custom-grid">
        {caseData.map((i) => {
          return <CaseItem key={i.id} class={i.class} image={i.image} type={i.type} title={i.title} />;
        })}
      </div>
    </div>
  );
};
