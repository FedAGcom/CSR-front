import { bannerEn , bannerRu } from '../images';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import i18next from 'i18next';


const languages: Record<string, {banner: string}> = {
  en: { banner: bannerEn},
  ru: { banner: bannerRu},
}

export const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
      <Grid container spacing={2}>
      <Grid item xs={12} >
       <img className="banner__img" src={languages[i18next.language].banner} alt="" style={{maxWidth: '100%'}} />
        </Grid>
      </Grid>

      </div>
    </div>
  );
};
