import { EmojiComponent } from "../handlerComponents/emojiHandler";
import { ChatItem } from "../types";
import { AbstractHandler } from "./baseHandler";

export class EmojiHandler extends AbstractHandler {
  public handle(request: ChatItem): JSX.Element | null {
    if (request.type.toLowerCase() === "emoji") {
      if (request.content?.text) {
        return <EmojiComponent text={request.content.text} />;
      }
    }
    return super.handle(request);
  }
}
