import { Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';

import * as Consts from './utils/Constants';
import ForwardIcon from '@mui/icons-material/Forward';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppMainContent from './components/AppMainCntnt';
import FeatureCard from './components/FeatureCard';
import PriceCard from './components/PriceCard';
import IntegrationCard from './components/IntegrationCard';


const App = () => {
  return (<>
    <AppHeader/>
    <Container maxWidth={false} sx={{marginTop: "9em"}}>
      <AppMainContent/>
      <Grid container spacing={2} sx={{marginBottom: "10em"}}>
        {
          Consts.FEATURE_ENTRIES.map(entry => {
            return (
              <Grid item xs={4}>
                <FeatureCard feature={entry}/>
              </Grid>
            )
          })
        }
      </Grid>

      <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10em"}}>
        <Typography variant="h3" sx={{marginBottom: "2em"}}> Start your free trial today! </Typography>
        <Grid container spacing={5} sx={{marginBottom: "7em"}}>
          {
            Consts.PYMT_ENTRIES.map(entry => {
              return (
                <Grid item xs={3}>
                  <PriceCard price={entry}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
      
      <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15em"}}>
        <Typography variant="h3" sx={{marginBottom: "2em"}}> 
          Bring in more data, drive more growth with our integrations
        </Typography>
        <Grid container spacing={2} sx={{marginBottom: "3em"}}>
          {
            Consts.INTEGRATIONS.map(entry => {
              return (
                <Grid item xs={4} sx={{marginBottom: "2em"}}>
                  <IntegrationCard integration={entry}/>
                </Grid>
              )
            })
          }
        </Grid>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Typography variant="h5">
            View all 300+ Integrations
          </Typography>
          <ForwardIcon fontSize="large" sx={{ marginLeft: "10px", color: "primary.main"}}/>
        </div>
      </Container> 
    </Container>
    <AppFooter/>
  </>)
}
export default App;
