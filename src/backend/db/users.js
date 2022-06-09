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
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653222089/mypics/2202112_g82ysn.png",
    linkedinURL: "https://www.linkedin.com/in/hanand2021/",
    bio: "Aspiring Front-End Developer",
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Sharma",
    username: "subham_2028sharma",
    password: "awsdk@21881",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653221259/mypics/4333609_p5cdme.png",
    linkedinURL: "https://www.linkedin.com/in/subham-sharma-5b187b1a6/",
    bio: "ReactJs Fan",
  },
  {
    _id: uuid(),
    firstName: "Sahil",
    lastName: "Chauhan",
    username: "chauhan_sahil4165",
    password: "111",
    profilePic: "https://res.cloudinary.com/mranand/image/upload/v1653221342/mypics/1785888_md4o0k.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    linkedinURL:"https://www.linkedin.com/in/sahil-chauhan-6a8b90176/",
    bio: "I love Cars",
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
      linkedinURL:"https://www.linkedin.com/in/adil-hossain-a61077190/",
      bio: "What brings you to my profile",
    },
    {
      _id: uuid(),
      firstName: "Naveen",
      lastName: "Kumar",
      username: "nkumar2128",
      password: "awsdk@1234",
      profilePic: "https://res.cloudinary.com/mranand/image/upload/v1654162581/mypics/3006876_pa2q6s.png",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      linkedinURL:"https://www.linkedin.com/in/naveen-kumar-2075a6124/",
      bio: "I am a Gareeb Coder",
    }
];
