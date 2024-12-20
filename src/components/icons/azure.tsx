import React from "react";

const MicrosoftAzureLogo = () => {
  const cdnUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"; // Reemplaza con el URL del CDN

  return (
    <img
      src={cdnUrl}
      alt="Microsoft Azure Logo"
      style={{ width: "3em", height: "2.5em" }} // Ajusta tamaño según sea necesario
    />
  );
};

export default MicrosoftAzureLogo;
