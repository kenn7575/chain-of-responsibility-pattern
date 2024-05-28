import { GifComponent } from "../handlerComponents/gitHandler";
import { ChatItem } from "../types";
import { AbstractHandler } from "./baseHandler";

export class GifHandler extends AbstractHandler {
  public handle(request: ChatItem): JSX.Element | null {
    if (request.type.toLowerCase() === "gif") {
      if (request.content?.image && request.content?.alt) {
        return (
          <GifComponent
            alt={request.content?.alt}
            image={request.content?.image}
          />
        );
      }
    }
    return super.handle(request);
  }
}
