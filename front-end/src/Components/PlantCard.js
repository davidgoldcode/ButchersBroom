import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const buttons = ["edit", "delete", "watered"];

const PlantCard = ({
  addButton,
  plant,
  index,
  doubleClickHandler,
  editPlant,
  setEditing,
  editing,
  classes
}) => {
  const [localPlant, setLocalPlant] = useState(plant);

  const changeHandler = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setLocalPlant({
      ...localPlant,
      [name]: value
    });
  };

  return (
    <Grid
      item
      key={index}
      xs={12}
      sm={6}
      md={6}
      className={addButton ? classes.addButton : ""}
    >
      <Card>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/collection/4380837/1600x900"
          title="Plant IMG"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <Input
              disabled={editing === index ? false : true}
              disableUnderline="true"
              multiline="true"
              placeholder={localPlant.name || "give your plant a name"}
              value={localPlant.name}
              name="name"
              onDoubleClick={() => doubleClickHandler(index)}
              onChange={changeHandler}
            />
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            <Input
              disabled={editing === index ? false : true}
              disableUnderline="true"
              multiline="true"
              placeholder={localPlant.species || "add plant species"}
              value={localPlant.species}
              name="species"
              onDoubleClick={() => doubleClickHandler(index)}
              onChange={changeHandler}
            />
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Last Watered: {localPlant.lastWatered}
          </Typography>

          <Typography>
            <Input
              disabled={editing !== index ? false : true}
              disableUnderline="true"
              multiline="true"
              placeholder={localPlant.notes || "type any plant notes here"}
              value={localPlant.notes}
              name="notes"
              onDoubleClick={() => doubleClickHandler(index)}
              onChange={changeHandler}
            />
          </Typography>
        </CardContent>
        <CardActions>
          {buttons.map(item => (
            <Button
              size="small"
              color="primary"
              name={
                editing === index && item === "edit" ? "submit changes" : item
              }
              onClick={evt => {
                evt.preventDefault();
                if (item === "submit changes" && editing === index) {
                  editPlant(localPlant);
                  setEditing(null);
                } else if (item === "edit") {
                  setEditing(index);
                } else if (item === "delete") {
                  return;
                } else if (item === "watered") {
                  return;
                }
              }}
            >
              {editing === index && item === "edit" ? "submit changes" : item}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PlantCard;
