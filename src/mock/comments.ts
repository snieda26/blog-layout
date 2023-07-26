import userAvatar1 from "../assets/userAvatar1.png";
import userAvatar2 from "../assets/userAvatar2.png";

export interface ICommentMock {
  userName: string;
  avatar: string;
  likesCount: number;
  repliesCount: number;
  writtenAt: string;
  comment: string;
  replies?: ICommentMock[];
}

export const Comments: ICommentMock[] = [
  {
    userName: "Farhan Goldi",
    avatar: userAvatar1,
    likesCount: 15,
    repliesCount: 6,
    writtenAt: "2 mins",
    comment:
      "Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus",
    replies: [
      {
        userName: "Стас Калинін",
        avatar: userAvatar2,
        likesCount: 15,
        repliesCount: 6,
        writtenAt: "2 mins",
        comment:
          "Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus",
      },
    ],
  },
];
