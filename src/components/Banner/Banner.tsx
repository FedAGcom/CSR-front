import { banner } from '../images';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
      <Grid container spacing={2}>
      <Grid item xs={12} >
       <img className="banner__img" src={banner} alt="" style={{maxWidth: '100%'}} />
        </Grid>
      </Grid>

      </div>
    </div>
  );
};
