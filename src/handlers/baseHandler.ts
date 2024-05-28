import { ChatItem } from "../types";

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: ChatItem): JSX.Element | null;
}

// AbstractHandler class to handle the chaining
export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | undefined;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: ChatItem): JSX.Element | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
