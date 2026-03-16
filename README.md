# stx-defi-activity-sdk

![npm version](https://img.shields.io/npm/v/stx-defi-activity-sdk)
![npm downloads](https://img.shields.io/npm/dm/stx-defi-activity-sdk)
![license](https://img.shields.io/npm/l/stx-defi-activity-sdk)
![GitHub stars](https://img.shields.io/github/stars/investorphem/stx-defi-activity-sdk)
![GitHub issues](https://img.shields.io/github/issues/investorphem/stx-defi-activity-sdk)
![build](https://img.shields.io/github/actions/workflow/status/investorphem/stx-defi-activity-sdk/publish.yml)

Production-ready SDK for real-time **DeFi, NFT, and wallet analytics** on the Stacks blockchain.

The SDK indexes blockchain activity using **Hiro Chainhooks** and exposes a powerful developer API for analytics, dashboards, trading tools, and monitoring systems.

---

# ✨ Features

- Real-time DeFi activity tracking 
- Protocol TVL analytics
- Deposit and withdrawal monitoring
- Token transfer tracking
- Wallet portfolio analytics
- NFT transfer tracking
- Whale transaction alerts
- Protocol ranking metrics
- Websocket real-time streaming
- Vercel-ready production deployment

---

# 📦 Installation

```bash
npm install stx-defi-activity-sdk
```

---

# 🚀 Quick Start

```javascript
import {
  getTVL,
  getDeposits,
  getProtocolRanking,
  getWalletPortfolio
} from "stx-defi-activity-sdk"

async function run(){

  const tvl = await getTVL()
  console.log("TVL:", tvl)

  const deposits = await getDeposits()
  console.log("Deposits:", deposits)

  const protocols = await getProtocolRanking()
  console.log("Protocols:", protocols)

  const wallet = await getWalletPortfolio("SP123...")
  console.log("Wallet:", wallet)

}

run()
```

---

# 📊 SDK Functions

## DeFi Tracking

| Function | Description |
|--------|--------|
| `getTVL()` | Total value locked |
| `getDeposits()` | Protocol deposits |
| `getWithdrawals()` | Protocol withdrawals |
| `getTransfers()` | Token transfers |

---

## Analytics

| Function | Description |
|--------|--------|
| `getActiveUsers()` | Number of active users |
| `getVolume()` | Protocol trading volume |
| `getWhaleAlerts()` | Detect large transactions |
| `getProtocolRanking()` | Top DeFi protocols |

---

## Wallet Analytics

| Function | Description |
|--------|--------|
| `getWalletPortfolio(address)` | Wallet balances and assets |

---

## NFT Tracking

| Function | Description |
|--------|--------|
| `getNFTTransfers()` | Track NFT transfers |
| `getNFTTransfers(collection)` | Track transfers by collection |

---

# ⚡ Real-time Streaming

```javascript
import { connectRealtime } from "stx-defi-activity-sdk"

connectRealtime((event) => {
  console.log("Realtime event:", event)
})
```

---

# 🧠 Use Cases

This SDK can power:

- DeFi analytics dashboards
- Portfolio tracking applications
- Whale monitoring tools
- NFT analytics platforms
- Trading analytics
- Blockchain research tools

---

# 🏗 Architecture

The SDK uses:

- Hiro Chainhooks event indexing
- Clarity smart contract event decoding
- Websocket streaming
- REST analytics APIs

---

# 🌍 Ecosystem Impact

This project aims to become the **analytics infrastructure layer for Stacks DeFi**, giving developers easy access to real-time blockchain data.

---

# 📜 License

MIT

---

# 👨‍💻 Author

Built for the Stacks developer ecosystem.