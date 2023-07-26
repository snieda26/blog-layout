import { FC } from "react";

import { ICommentMock } from "@mock/comments";

import styles from "./comment.module.scss";

import { Like, Options, Comment as CommentIcon } from "@components/Icons";

interface IComment extends Omit<ICommentMock, "replies"> {}

export const Comment: FC<IComment> = ({
  userName,
  avatar,
  likesCount,
  repliesCount,
  writtenAt,
  comment,
}) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" />
      <div className={styles.comment}>
        <div className={styles.info}>
          <div className={styles.userName}>
            <span className={styles.name}>{userName}</span>
            <span className={styles.writtenAt}>{writtenAt}</span>
          </div>
          <Options />
        </div>
        <span className={styles.text}>{comment}</span>
        <div className={styles.buttons}>
          <button>
            <span>{likesCount} Like</span>
            <Like />
          </button>
          <button>
            <span>{repliesCount} Replies</span>
            <CommentIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
