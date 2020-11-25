import Body from "./Body";
import Card from "./Card";
import Header from "./Header";
import Text from "./Text";
import Title from "./Title";

const subs = {
  Body,
  Header,
  Text,
  Title,
};

Object.keys(subs).forEach((key) => {
  Card[key] = subs[key];
  Card[key].displayName = `Card.${key}`;
});

export default Card;
