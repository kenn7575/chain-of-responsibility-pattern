import { EmojiHandler } from "./handlers/emojiHandler";
import { GifHandler } from "./handlers/gifHandler";
import { ImageHandler } from "./handlers/imageHandler";
import { TextHandler } from "./handlers/textHandler";
import { ChatItem } from "./types";

export const ChatRenderer: React.FC<{ data: ChatItem[] }> = ({ data }) => {
  const imageHandler = new ImageHandler();
  const gifHandler = new GifHandler();
  const textHandler = new TextHandler();
  const emojiHandler = new EmojiHandler();

  imageHandler.setNext(gifHandler).setNext(textHandler).setNext(emojiHandler);

  return (
    <div>
      {data.map((message, index) => (
        <div key={index}>
          {imageHandler.handle(message) || (
            <div>
              {message.type} request was not handled {")"}:
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
