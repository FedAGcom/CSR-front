interface IPrizeModalProps {
  image: string;
  type: string;
  title: string;
  class: string;
  id: string | number;
}

export const PrizeModal: React.FC<IPrizeModalProps> = (props) => {
  return (
    <div className={'prize-modal ' + 'rarity-' + props.class}>
      <img className="prize-modal__img" src={props.image} alt={props.type} />
      <span className="prize-modal__type">{props.type}</span>
      <span className="prize-modal__title">{props.title}</span>
    </div>
  );
};
