import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const buttons = ["view", "edit", "delete"];

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
                editing === index && item === "edit" ? "submit changes" : item
              }
              onClick={() => setEditing(index)}
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
