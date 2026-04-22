import {
  getTVL,
  getDeposits,
  getProtocolRanking,
  getWalletPortfolio
} from "stx-defi-activity-sdk"

async function run() {

  const tvl = await getTVL()

  const deposits = await getDeposits()

  const protocols = await getProtocolRanking()

  const wallet = await getWalletPortfolio("SP123...")

  console.log(tvl)
  console.log(deposits)
  console.log(protocols)
  console.log(wallet)

}

run()