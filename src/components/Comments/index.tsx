import { FC } from "react";

import { ICommentMock } from "@mock/comments";

import { Comment } from "ui/Comment";

import styles from "./comments.module.scss";
import { DropDown } from "@components/Icons";

interface IComments {
  comments: ICommentMock[];
}

export const Comments: FC<IComments> = ({ comments }) => {
  return comments.map(item => (
    <div className={styles.comments}>
      <Comment {...item} />
      {item.replies && (
        <div className={styles.reply}>
          <div className={styles.allComments}>
            <span>View all 124 comments</span>
            <DropDown />
          </div>
          <div>
            {item.replies.map(item => (
              <Comment {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  ));
};
