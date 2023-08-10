import logo from "./logo.svg";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Itemm from "./components/showItem/showItem.js";
import Create from "./components/createItem/createItem.js";
import "./App.css";
import useStyles from "./styles";
import { mergeClasses } from "@material-ui/styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography
            className={classes.heading}
            variant="h2"
            align="center"
            color="inherit"
          >
            Inventory
          </Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <Itemm className="tableBody" />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                ></AppBar>
                <Create />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
