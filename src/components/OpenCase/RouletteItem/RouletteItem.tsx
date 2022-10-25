interface IRouletteItemProps {
  class?: string;
  image?: string;
}

export const RouletteItem: React.FC<IRouletteItemProps> = (props: IRouletteItemProps) => {
  return (
    <div className={'item ' + 'case-item-' + props.class}>
      <div>
        <img className="item__img" src={props.image} alt="" />
      </div>
    </div>
  );
};
