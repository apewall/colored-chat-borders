const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);

export let enableChatBorders: boolean;

export const registerSettings = function() {
    game.settings.register("colored-chat-borders", "EnableChatBorders", {
        name: "Enable colored chat borders",
        hint: "Enable colored chat borders for all chat messages",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        onChange: debouncedReload
    });
}

export function getSettings() {
    enableChatBorders = Boolean(game.settings.get("colored-chat-borders", "EnableChatBorders"));
}

declare global {
    namespace ClientSettings {
        interface Values {
            'colored-chat-borders.enableChatBorders': boolean;
        }
    }
}
