import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Harshit",
    lastName: "Anand",
    username: "hanand2021",
    password: "igity@211",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653222089/mypics/2202112_g82ysn.png"
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Sharma",
    username: "subham_2028sharma",
    password: "awsdk@21881",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653221259/mypics/4333609_p5cdme.png"
  },
  {
    _id: uuid(),
    firstName: "Sunny",
    lastName: "Gupta",
    username: "gupta_sunny4165",
    password: "111",
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653221342/mypics/1785888_md4o0k.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
      _id: uuid(),
      firstName: "Adil",
      lastName: "Hossain",
      username: "adilhossain121",
      password: "qwerty@2021",
      profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653979559/mypics/IMG_20220531_121424_qdwg2d.jpg",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    }
];
