import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

import "./Carousel.scss";

const CarouselComponent = () => {
  return (
    <div style={{ color: "#494949" }}>
      <Carousel className="SecondExample" animation="slide" duration={600}>
        {items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

function Project({ item }) {
  return (
    <Paper
      className="Project"
      style={{
        backgroundColor: item.color,
        backgroundImage: `url("https://placebear.com/1600/900.jpg")`,
        backgroundSize: "cover",
      }}
      elevation={10}
      square={true}
    >
      <Typography variant="h5">{item.name}</Typography>
      <br />
      <Typography>{item.description}</Typography>

      <Button
        className="CheckButton"
        component="a"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        Check it out!
      </Button>
    </Paper>
  );
}

const items = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: "https://github.com/Learus/Lear-Music-Reader",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
  },
];

export default CarouselComponent;
