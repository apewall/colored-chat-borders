import { registerSettings, getSettings, enableChatBorders } from './module/settings';

Hooks.once('init', async function() {
    registerSettings();
    getSettings();
    console.log("colored-chat-borders | Initializing colored-chat-borders")
});

Hooks.on("renderChatMessage", (_message: ChatMessage, html: JQuery, messageData: any) => {
    if (enableChatBorders) {
        let authorColor: string = "black";
        if (messageData.author.color) {
            authorColor = messageData.author.color;
        } else {                     
            authorColor = messageData?.user.color;
        }                            
        html[0].style.borderColor = authorColor;
        messageData.borderColor = authorColor;
    }
});
