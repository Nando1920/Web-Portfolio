import eventr from "../../../public/eventr.png";
import portfolio from "../../../public/Portfolio.png";
import tempImage from "../../../public/aboutme.jpg";

export const getProjectImg = (name: string) => {
  switch (name) {
    case "EventR":
      return eventr;
    case "Portfolio":
      return portfolio;
    default:
      return tempImage;
  }
};
