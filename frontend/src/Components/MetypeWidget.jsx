import React, { useEffect, useRef } from 'react';

function MetypeWidget() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) {
      return;
    }

    // Metype initialization script
    window.talktype = window.talktype || function(f) {
      if (window.talktype.loaded)
        f();
      else
        (window.talktype.q = window.talktype.q || []).push(arguments);
    };

    // Load Metype script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.metype.com/quintype-metype/assets/metype.js';
    script.onload = () => {
        window.talktype = window.talktype || function(f) {
            if (window.talktype.loaded)
              f();
            else
              (window.talktype.q = window.talktype.q || []).push(arguments);
          };
        scriptLoadedRef.current = true;
    };

    script.onerror = () => {
      console.error('Failed to load Metype script.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const metypeContainer = document.getElementById("metype-container");
    const page_url = metypeContainer.getAttribute("data-metype-page-url");
    metypeContainer.setAttribute('data-metype-page-url', page_url || window.location.href);
    metypeContainer.setAttribute('data-metype-window-height', window.innerHeight);
    metypeContainer.setAttribute('data-metype-screen-width', window.screen.width);
    window.talktype(function() {
      window.talktype.commentWidgetIframe(metypeContainer);
    });
  }, []);

  return (
    <div>
    <div id='metype-container' className='iframe-container' data-metype-account-id='1004029' data-metype-host='https://www.metype.com/' data-metype-primary-color='#2ed06e' data-metype-bg-color='#ffffff' data-metype-font-color='#4a4a4a'>
      
    </div>
    </div>
  );
}

export default MetypeWidget;
