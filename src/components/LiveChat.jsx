
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


function LiveChat() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    // Initialize the chat widget
    ChatWidgetController.init(language);
  }, []);


}
export const ChatWidgetController = (() => {
  // Initialize Tawk.to
  const init = (language) => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.autoStart = false; // Disable auto-start

    // Load Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${
      import.meta.env.VITE_APP_TAWK_PROPERTY_ID
    }/${
      language === "ar"
        ? import.meta.env.VITE_APP_TAWK_AR_WIDGET_ID
        : import.meta.env.VITE_APP_TAWK_EN_WIDGET_ID
    }`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    // window.Tawk_API.start({ showWidget: true });
    if (window.Tawk_API) {
      window.Tawk_API.start({ showWidget: true });
    }


    // window.Tawk_API.onLoad = () => {
    //   console.log("Tawk.to loaded");
    // };

    // // Handle the onChatHidden event to perform cleanup when the chat is closed
    // window.Tawk_API.onChatHidden = () => {
    //   console.log("Chat closed. Performing cleanup.");
    //   // Add any additional cleanup code here, if needed
    // };
  };

  // Show the chat widget
  const showChat = () => {
    window.Tawk_API.start({ showWidget: false });

    window.Tawk_API.maximize({ showWidget: true });
    // window.Tawk_API.hideWidget();

    if (window.Tawk_API) {
      window.Tawk_API.onChatEnded = function () {
        hideChat();
      };
    }
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
    };
  };

  // if (window.Tawk_API) {
  //   window.Tawk_API.onChatMinimized = function () {
  //     hideChat();
  //   };
  // }
  // window.Tawk_API.onLoad = function () {
  //   window.Tawk_API.hideWidget();
  // };

  // Hide the chat widget
  const hideChat = () => {
    window.Tawk_API.shutdown();
  };

  // Switch between English and French widgets
  const switchLanguage = (language) => {
    const widgetId =
      language === "ar"
        ? import.meta.env.VITE_APP_TAWK_FR_WIDGET_ID
        : import.meta.env.VITE_APP_TAWK_AR_WIDGET_ID;
    if (window.Tawk_API) {
      window.Tawk_API.switchWidget({
        propertyId: import.meta.env.VITE_APP_TAWK_PROPERTY_ID,
        widgetId: widgetId,
      });
    }
  };

  // Expose the functions
  return {
    init,
    showChat,
    hideChat,
    switchLanguage,
  };
})();

export default LiveChat;
