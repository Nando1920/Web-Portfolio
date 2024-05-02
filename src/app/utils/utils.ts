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

export const downloadPdf = () => {
  const pdfUrl = "/Fernando_TamayoCV2024.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop() ?? "My_CV";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
