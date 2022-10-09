import { ImageProperties } from "../../types/Image";
import HoveredMessage from "../Message/message-component";


export default function OurImage(props: ImageProperties ) {
  const { source, topbot, leftright, skew } = props;
  const image_position: string = "absolute w-96 h-72 " + topbot + " " + leftright + " shadow-2xl ring-offset-2 ring-2 ring-yellow-500 " + skew;
  return (
    <img src={source} className={image_position}/>
  )
}
