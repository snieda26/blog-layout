import { Heart } from "@components/Icons";

import styles from "./like.module.scss";
import { useState } from "react";

export const Like = () => {
  const [isPressed, setIsPressed] = useState(false);

  const pressed = isPressed && styles.pressed;

  const handleClickLike = () => {
    setIsPressed(!isPressed);
  };
  return (
    <button className={`${styles.like} ${pressed}`} onClick={handleClickLike}>
      <Heart />
    </button>
  );
};
