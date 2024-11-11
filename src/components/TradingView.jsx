import React from "react";

function TradingView() {
  return (
    <iframe
      scrolling="no"
      allowTransparency="true"
      frameBorder="0"
      // style="user-select: none; box-sizing: border-box; display: block; height: 72px; width: 100%;"
      src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%20Index%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%20Cash%20CFD%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22QQQ%22%2C%22proName%22%3A%22NASDAQ%3AQQQ%22%7D%2C%7B%22description%22%3A%22GOLD%22%2C%22proName%22%3A%22OANDA%3AXAUUSD%22%7D%2C%7B%22description%22%3A%22Crude%20Oil%22%2C%22proName%22%3A%22NYMEX%3ACL1!%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A76%2C%22utm_source%22%3A%22chartxpert.io%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22chartxpert.io%2F%22%7D"
      title="ticker tape TradingView widget"
      lang="ar"
    ></iframe>
  );
}

export default TradingView;
