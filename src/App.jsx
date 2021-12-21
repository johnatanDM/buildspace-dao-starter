import { userEffect, useMemo, useState } from "react";

import { useWeb3 } from "@3rdweb/hooks";

const App = () => {

  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to Web3 CommunityDAO</h1>
        <h2>Or just CommunityDAO for the intimate</h2>
        <h3>Came make the Web3 with us!</h3>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    )
  }

  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
