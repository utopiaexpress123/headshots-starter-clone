import React, { useEffect } from 'react';

const BotpressChat = () => {
    useEffect(() => {
        // Function to load the Botpress script
        const loadBotpressScript = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
            script.async = true;
            script.onload = initBotpressChat; // Initialize Botpress Chat after script loads
            document.body.appendChild(script);
        };

        // Function to initialize Botpress Chat
        const initBotpressChat = () => {
            window.botpressWebChat.init({
                "composerPlaceholder": "Chat with bot",
                "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
                "botId": "f9805774-fb6c-439e-8d19-dec923fa753e",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "f9805774-fb6c-439e-8d19-dec923fa753e",
                "webhookId": "02784859-804f-4d83-8e41-58fe126871e9",
                "lazySocket": true,
                "themeName": "prism",
                "stylesheet": "https://utopia.express/botpress_fullwidth_light2.css",
                "frontendVersion": "v1",
                "theme": "prism",
                "themeColor": "#2563eb"
            });
        };

        loadBotpressScript();

        // Cleanup function to remove script when component unmounts
        return () => {
            const script = document.querySelector("script[src='https://cdn.botpress.cloud/webchat/v1/inject.js']");
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div>
            {/* Content of your component (if any) */}
        </div>
    );
};

export default BotpressChat;
