export interface ChatItem {
  type: string;
  content: ChatContent;
}
export interface ChatContent {
  image?: string;
  alt?: string;
  text?: string;
}
