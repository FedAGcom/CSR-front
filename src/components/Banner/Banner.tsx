import { banner } from '../images';

export const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <img className="banner__img" src={banner} alt="" />
      </div>
    </div>
  );
};
