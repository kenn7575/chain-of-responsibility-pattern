import { TextComponent } from "../handlerComponents/textHandler";
import { ChatItem } from "../types";
import { AbstractHandler } from "./baseHandler";

export class TextHandler extends AbstractHandler {
  public handle(request: ChatItem): JSX.Element | null {
    if (request.type.toLowerCase() === "text") {
      if (request.content?.text) {
        return <TextComponent text={request.content.text} />;
      }
    }
    return super.handle(request);
  }
}
