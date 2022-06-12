import React, { useState } from "react";
import { CommentsIcon, LikesIcon, FilesIcon } from "../assets/icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: "#f00",
    alignItems: "center",
  },
  CommentsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: 4,
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#569fab87",
      color: "#569fab",
      "& svg> path": {
        // fill: "#569fab",
      },
    },
  },

  LikesWrapper: {
    gap: 4,
    padding: 4,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#cb4242b3",
      color: "#d12020",
      "& svg> path": {
        fill: "#cb4242b3",
      },
    },
  },

  FilesWrapper: {
    gap: 4,
    padding: 4,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#7a7a7a87",
      color: "#505050",
      "& svg> path": {
        //fill: "#569fab",
      },
    },
  },
}));

function CardActions({ actions }) {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(actions.comments);
  const [likes, setLikes] = useState(actions.likes);
  const [attachments, setAttachments] = useState(actions.attachments);

  const commentsOnClick = (e) => {
    return setComments(comments + 1);
  };

  const likesOnClick = (e) => {
    if (isLiked) {
      setIsLiked(false);
      return setLikes(likes - 1);
    } else {
      setIsLiked(true);
      return setLikes(likes + 1);
    }
  };

  const attachmentsOnClick = (e) => {
    return setAttachments(attachments + 1);
  };

  return (
    <span className={classes.actions}>
      <span>A</span>
      <span style={{ display: "flex", gap: 8 }}>
        <span className={classes.CommentsWrapper} onClick={commentsOnClick}>
          {comments}
          <CommentsIcon />
        </span>
        <span className={classes.LikesWrapper} onClick={likesOnClick}>
          {likes}
          <LikesIcon />
        </span>
        <span className={classes.FilesWrapper} onClick={attachmentsOnClick}>
          {attachments}
          <FilesIcon />
        </span>
      </span>
    </span>
  );
}

export default CardActions;
