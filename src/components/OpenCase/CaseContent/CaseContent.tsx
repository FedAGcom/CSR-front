import { caseData } from '../../../mocks/open-case';
import { useAppSelector } from '../../../store';
import { CaseItem } from '../../CaseItem/CaseItem';

export const CaseContent = () => {
  const { packItemsList } = useAppSelector((state) => state.packSlice);

  return (
    <div className="case-content__wraper">
      <h5 className="case-content__title">Содержимое кейса</h5>
      <div className="custom-grid">
        {packItemsList.map((i) => {
          return (
            <CaseItem key={i.id} class={i.rare} image={i.iconItemId} type={i.type} title={i.title} content={true} />
          );
        })}
      </div>
    </div>
  );
};
