import React from "react";
import { MgButton } from "../Button";
import { MgImage } from "../MgImage";
import "./ImageTile.scss";

interface ImageTileProps {
  url: string;
  title: string;
  buttonText: string;
  imageUrl: string;
}

export const ImageTile = (Props: ImageTileProps) => {
  const { url, title, buttonText, imageUrl } = Props;

  return (
    <div className="image-tile">
      <a href={url}>
        <MgImage desktop={imageUrl} mobile={undefined} />
        <h2 className="text-center">{title}</h2>
        <MgButton inverted={true} text={buttonText} />
      </a>
    </div>
  );
};
