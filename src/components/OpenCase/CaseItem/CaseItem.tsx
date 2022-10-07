interface ICaseItemProps {
  image: string;
  type: string;
  title: string;
  class: string;
}

export const CaseItem: React.FC<ICaseItemProps> = (props) => {
  return (
    <div className={'case-item ' + 'case-item-' + props.class}>
      <img className="case-item__img" src={props.image} alt={props.type} />
      <span className="case-item__type">{props.type}</span>
      <span className="case-item__title">{props.title}</span>
    </div>
  );
};
