import { ChatItem } from "../types";
import { AbstractHandler } from "./baseHandler";
import { ImageComponent } from "../handlerComponents/imageHandler";

export class ImageHandler extends AbstractHandler {
  public handle(request: ChatItem): JSX.Element | null {
    if (
      request.type === "Image" &&
      request.content?.image &&
      request.content?.alt
    ) {
      return (
        <ImageComponent
          image={request.content.image}
          alt={request.content.alt}
        />
      );
    }
    return super.handle(request);
  }
}
