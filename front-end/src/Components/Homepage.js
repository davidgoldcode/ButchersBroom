import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import EcoIcon from "@material-ui/icons/Eco";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(theme => ({
  root: {
    height: "95vh"
  },
  image: {
    backgroundImage:
      "url(https://source.unsplash.com/collection/1521781/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  button: {
    margin: "2%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <EcoIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Butcher's Broom
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              href="#outlined-buttons"
              className={classes.button}
            >
              <AddIcon color="primary" />
              <Typography variant="h7" color="primary">
                <Link to="/register">Register</Link>
              </Typography>
            </Button>
            <Button
              variant="contained"
              href="#outlined-buttons"
              className={classes.button}
            >
              <LockOpenIcon color="primary" />
              <Typography variant="h7" color="primary">
                <Link to="/login">Login</Link>
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}></div>
        </Grid>
      </Grid>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Butcher's Broom
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </footer>
    </>
  );
};

export default Homepage;
