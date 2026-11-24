> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/midas-mhyper.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Midas mHYPER

Structured Yield Products on Midas mHYPER

Midas [mHYPER](https://midas.app/mhyper) is a tokenized investment strategy focused on multi-chain stablecoin yields, managed by [Hyperithm](https://www.hyperithm.com/) and powered by [Midas](https://midas.app/).&#x20;

Managed yield vaults like mHYPER carry multiple layers of risk arising from the underlying assets, protocols, and manager execution. While these risks cannot be fully eliminated, they can be assessed, priced and transferred. Strata’s risk-tranching mechanism transforms mHYPER into two tokenized tranches with clearly structured risk and return profiles.

The one-size-fits-all design of Midas mHYPER is not ideal for many investors across DeFi and TradFi as different capital allocators have varying risk appetites and return expectations, which a single yield product cannot fully satisfy.

Strata is purpose-built to deliver structured yields on mHYPER by transforming blended vault risk into programmable tranches, allowing depositors to access Hyperithm’s multi-chain stablecoin yield strategy with built-in protection or opt for higher returns by taking on amplified exposure to mHYPER performance and incremental risk. At the same time, tranching mHYPER significantly improves the product’s composability across the broader DeFi ecosystem.

The protocol introduces two liquid and composable tokens built on Midas mHYPER: **Strata Senior mHYPER (srmHYPER)** and **Strata Junior mHYPER (jrmHYPER)**.

* **srmHYPER (Senior Tranche):** Senior mHYPER is a liquid, yield-bearing derivative of Midas mHYPER that provides low-risk exposure to Hyperithm’s multi-chain stablecoin yield strategies. It is designed to deliver a minimum guaranteed yield linked to a benchmark rate, with built-in protection against underlying strategy and counterparty risks.
* **jrmHYPER (Junior Tranche):** Junior mHYPER is a liquid, yield-bearing derivative of Midas mHYPER that offers leveraged upside to mHYPER performance in exchange for assuming first loss risk. It functions as a market-priced insurance layer, absorbing any shortfall required to meet the senior tranche’s minimum guaranteed yield while underwriting underlying strategy and counterparty risks.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FwGAl7Mqlb7bVh6SWmp1m%2Fimage_2026-04-03_18-00-42.png?alt=media&amp;token=9819c153-8778-43a5-8cac-6765808ed81a" alt=""><figcaption></figcaption></figure>

#### Market Specifications

<table data-header-hidden><thead><tr><th width="275.515625"></th><th width="474.06640625"></th></tr></thead><tbody><tr><td>Underlying Protocol</td><td>Midas</td></tr><tr><td>Yield Source</td><td>mHYPER</td></tr><tr><td>Base Asset</td><td>USDC</td></tr><tr><td>Benchmark</td><td>Supply-weighted average of USDC/USDT lending rates on Aave v3 Core + 3% APY risk premium</td></tr><tr><td>Performance Fee</td><td>7.5%</td></tr><tr><td>Senior Redemption Fee</td><td><p>0.05% when coverage is above 120%</p><p>0.025% when coverage is 110-120%</p><p>0% when coverage is below 110%</p></td></tr><tr><td>Junior Redemption Fee</td><td>0.20% when coverage is above 120%<br>0.10% when coverage is 110-120%<br>0% when coverage is below 110%</td></tr><tr><td>Senior Cooldown Period</td><td>None</td></tr><tr><td>Junior Cooldown Period</td><td>None when coverage is above 120%<br>7 days when coverage is 110-120%<br>21 days when coverage is below 110%</td></tr></tbody></table>
