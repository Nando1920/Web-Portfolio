import eventr from "../../../public/eventr.png";
import tempImage from "../../../public/aboutme.jpg";

export const getProjectImg = (name: string) => {
  switch (name) {
    case "EventR":
      return eventr;
    default:
      return tempImage;
  }
};
