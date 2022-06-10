import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Keep Hustling!!",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hanand2021",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "adilhossain121",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "gupta_sunny4165",
        text: "Wow! Good going Harshit. Keep hustling 🤩",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I started learning Web Development. Wish me Luck!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "subham_2028sharma",

    comments: [
      {
        _id: uuid(),
        username: "hanand2021",
        text: "All the best subham!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "विद्या ददाति विनयम !!",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hanand2021",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Do you send memes in your office group? 😂😂",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adilhossain121",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
      _id: uuid(),
      content:
        "Wohoooo.. Got Promoted !!",
      likes: {
        likeCount: 10,
        likedBy: [],
        dislikedBy: [],
      },
      username: "gupta_sunny4165",
  
      comments: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "We lost a gem today 😞. RIP KK",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hanand2021",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Tere haathon se dil ka tootna aisa tha, ki jaisa phool kisi ko chubh gaya ho",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar1705",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "adilhossain121",
        text: "Are bhai bhai 💥💥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        }
      },
    ]
  }
];
