import * as React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const Image: React.FC<Props> = (props: Props) => <img {...props} alt="" />;

export default Image;
