import { registerSettings, getSettings, enableChatBorders, enableChatBars } from './module/settings';

Hooks.once('init', async function() {
  registerSettings();
  getSettings();
  console.log("colored-chat-borders | Initializing colored-chat-borders")
});

Hooks.on("renderChatMessage", (_message: ChatMessage, html: JQuery, messageData: any) => {
  let authorColor: string = "black";
  if (messageData.author.color) {
    authorColor = messageData.author.color;
  }

  if (enableChatBorders) {
    html[0].style.borderColor = authorColor;
  }

  if (enableChatBars) {
    let chatMessageHeader = html[0].children[0] as HTMLElement;
    chatMessageHeader.style.borderBottom = `10px Solid ${authorColor}`;
    chatMessageHeader.style.marginBottom = "5px";
  }
});
