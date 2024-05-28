import { GifComponent } from "../handlerComponents/gitHandler";
import { ChatItem } from "../types";
import { AbstractHandler } from "./baseHandler";

export class GifHandler extends AbstractHandler {
  public handle(request: ChatItem): JSX.Element | null {
    if (request.type.toLowerCase() === "gif") {
      return <GifComponent />;
    }
    return super.handle(request);
  }
}
