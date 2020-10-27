import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addPlant } from "../store/actions/plantActions";

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
  cardMedia: {
    paddingTop: "30%"
  },
  cardContent: {
    flexGrow: 2,
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    height: "80%",
    width: "60vw",
    margin: "5% auto",
    zIndex: "1000"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  input: {
    width: "80%"
  }
}));

const initialValues = {
  name: "",
  species: "",
  notes: "",
  frequency: ""
};

const AddPlant = ({ addPlant, setAddButton }) => {
  const classes = useStyles();
  const [newPlant, setNewPlant] = useState(initialValues);

  const changeHandler = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setNewPlant({
      ...newPlant,
      [name]: value
    });
  };

  return (
    <Card
      className={classes.cardContent}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/collection/4380837/1600x900"
        title="Image title"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {Object.keys(initialValues).map((item, index) => (
            <Input
              multiline="true"
              placeholder={"Enter plant " + item}
              value={newPlant[item]}
              name={item}
              onChange={changeHandler}
              className={classes.input}
            />
          ))}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2"></Typography>
      </CardContent>
      <Button
        size="small"
        color="primary"
        name="submit"
        onClick={evt => {
          evt.preventDefault();
          addPlant(newPlant);
          setAddButton(false);
        }}
      >
        Submit
      </Button>
    </Card>
  );
};

export default connect(null, { addPlant })(AddPlant);
