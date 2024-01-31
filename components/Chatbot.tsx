import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'f9805774-fb6c-439e-8d19-dec923fa753e',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'f9805774-fb6c-439e-8d19-dec923fa753e',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot