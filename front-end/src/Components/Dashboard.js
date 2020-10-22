import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EcoIcon from "@material-ui/icons/Eco";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import {
  addPlant,
  deletePlant,
  editPlant
} from "../store/actions/plantActions";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 2
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const buttons = ["view", "edit", "delete"];

const Dashboard = ({ plants, addPlant, editPlant, deletePlant }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(null);

  const clickHandler = evt => {
    evt.preventDefault();
    const { name } = evt.target;
    if (name.toLowerCase() === "edit") {
      editPlant();
    } else if (name.toLowerCase() === "delete") {
      deletePlant();
    } else {
      return;
    }
  };

  const doubleClickHandler = index => {
    setEditing(index);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <EcoIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Butcher's Broom
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              You have 0 plants that need to be watered
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              "Let's root for each other and watch each other grow"
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Plants that need your attention
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    All plants
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {/* map through state */}
            {plants.map((plant, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/collection/4380837/1600x900"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plant.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {plant.species}
                    </Typography>
                    <Typography>
                      <Input
                        disabled={editing === index ? false : true}
                        disableUnderline="true"
                        multiline="true"
                        placeholder={plant.notes}
                        value={plant.notes}
                        name={index}
                        onDoubleClick={() => doubleClickHandler(index)}
                        onChange={editPlant}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {buttons.map(item => (
                      <Button
                        size="small"
                        color="primary"
                        name={
                          editing === index && item === "edit"
                            ? "submit changes"
                            : item
                        }
                        onClick={() => setEditing(index)}
                      >
                        {editing === index && item === "edit"
                          ? "submit changes"
                          : item}
                      </Button>
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
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

const mapStateToProps = state => {
  return {
    plants: state.plants
  };
};

export default connect(mapStateToProps, { addPlant, editPlant, deletePlant })(
  Dashboard
);
