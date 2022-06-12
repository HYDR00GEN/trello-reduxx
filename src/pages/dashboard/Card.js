import { useState } from "react";
import { useTheme, createUseStyles } from "react-jss";
import CardActions from "../../components/CardActions";

const useStyles = createUseStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ececec",
    color: "black",
    padding: 14,
    margin: 12,
    maxWidth: 300,
    borderRadius: "12px",
    border: "1px solid black",
  },

  cardLabel: {
    backgroundColor: "orange",
    width: "50px",
    minHeight: "10px",
    borderRadius: 12,
  },
  cardDescr: {
    marginBottom: 12,
    fontSize: 14,
    color: "#424141",
  },
}));

function Card({ descr, title, actions, ...rest }) {
  const classes = useStyles();
  //procedimento con props hardcoded

  return (
    <div {...rest} className={classes.card}>
      <div className={classes.cardLabel}></div>
      <h4>{title}</h4>
      <div className={classes.cardDescr}>{descr}</div>
      <CardActions actions={actions} />
    </div>
  );
}
export default Card;
