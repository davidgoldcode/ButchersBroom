import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import EcoIcon from "@material-ui/icons/Eco";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PlantCard from "./PlantCard";
import AddPlant from "./AddPlant";
import { plantListActions } from "../store/actions/plantActions";
import {
  addPlant,
  deletePlant,
  editPlant
} from "../store/actions/plantActions";

const useStyles = makeStyles(theme => ({
  addButton: {
    opacity: ".8"
  },
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

const Dashboard = ({
  plants,
  addPlant,
  editPlant,
  deletePlant,
  user_id,
  plantListActions
}) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(null);
  const [addButton, setAddButton] = useState(false);

  const doubleClickHandler = index => {
    setEditing(index);
  };

  const addButtonHandler = evt => {
    evt.preventDefault();
    setAddButton(true);
  };

  useEffect(() => {
    plantListActions(user_id);
    console.log("here i am");
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        className={addButton ? classes.addButton : ""}
      >
        <Toolbar className={addButton ? classes.addButton : ""}>
          <Box display="flex" flexGrow={1} onClick={() => setAddButton(false)}>
            <EcoIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Butcher's Broom
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              href="#outlined-buttons"
              onClick={addButtonHandler}
            >
              <AddIcon color="primary" />
              <Typography variant="h7" color="primary" noWrap>
                Add Plant
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        {addButton && <AddPlant />}
        <div
          className={classes.heroContent}
          onClick={() => setAddButton(false)}
        >
          <Container
            maxWidth="sm"
            className={addButton ? classes.addButton : ""}
          >
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
        <Container
          className={classes.cardGrid}
          maxWidth="md"
          onClick={() => setAddButton(false)}
        >
          {/* End hero unit */}
          <Grid container spacing={6} onClick={() => setAddButton(false)}>
            {/* map through state */}
            {plants.map((plant, index) => (
              <PlantCard
                plant={plant}
                index={index}
                doubleClickHandler={doubleClickHandler}
                editPlant={editPlant}
                setEditing={setEditing}
                editing={editing}
                classes={classes}
                addButton={addButton}
              />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer} onClick={() => setAddButton(false)}>
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
    plants: state.plants,
    user_id: state.user_id
  };
};

export default connect(mapStateToProps, {
  addPlant,
  editPlant,
  deletePlant,
  plantListActions
})(Dashboard);
