import { Button } from "@nextui-org/react";
import ArchiveIcon from "@mui/icons-material/Archive";
import confetti from "canvas-confetti";

export const ButttonCv = () => {
  const handleOnClickConfetti = () => {
    console.log("Confetti==>", handleOnClickConfetti);

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0,
        // since they fall down, start a bit higher than random
        y: 0.5,
      },
    });
  };

  //logica de descarga pdf
  const handleDownload = () => {
    console.log("handleDownload=>>", handleDownload);
    fetch(`/download/CV-Erick-Huallullo-Cirineo.pdf`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV-Erick-Huallullo-Cirineo.pdf";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button
      css={{ marginTop: 20 }}
      color={"gradient"}
      onClick={() => {
        handleOnClickConfetti();
        handleDownload();
      }}
    >
      <ArchiveIcon />
      <span style={{ padding: "0px 10px" }}>Curriculum</span>
    </Button>
  );
};
