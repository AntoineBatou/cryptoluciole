> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/neutrl-nusd.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Neutrl NUSD

Structured Yield Products on Neutrl NUSD

The one-size-fits-all design of [Neutrl](https://www.neutrl.finance/) [sNUSD](https://app.neutrl.finance/protocol?subTab=snusd) is not ideal for many investors across DeFi and TradFi as different capital allocators have varying risk appetites and return expectations, which a single yield product cannot fully satisfy.

Strata is purpose-built to deliver structured yields on [NUSD](https://app.neutrl.finance/protocol), Neutrl’s synthetic dollar designed to deliver a novel crypto-native yield through a diversified set of market-neutral strategies, including OTC arbitrage, funding rate arbitrage, and DeFi-native strategies.

The protocol introduces two liquid and composable tokens built on Neutrl’s yield-bearing synthetic dollar, sNUSD: **Strata Senior NUSD (srNUSD)** and **Strata Junior NUSD (jrNUSD)**.

* **srNUSD (Senior Tranche):** Designed for capital preservation, srNUSD offers a stable yield floor benchmarked to Ethena sUSDe APY while still participating in the upside of sNUSD APY and protected against underlying strategy risks.
* **jrNUSD (Junior Tranche):** Provides leveraged upside to sNUSD’s variable APY by earning a risk premium from the senior tranche, acting as first-loss capital that underwrites sNUSD’s underperformance against the benchmark and underlying strategy risks.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2F3ambAyqFqtUxoDRdR2Lo%2F6.png?alt=media&amp;token=8b0bf5a4-2301-4ffc-8897-7d8683d47818" alt=""><figcaption></figcaption></figure>

#### Market Specifications

| Underlying Protocol    | Neutrl                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Yield Source           | sNUSD                                                                                                              |
| Base Asset             | NUSD                                                                                                               |
| Benchmark              | Ethena sUSDe APY                                                                                                   |
| Performance Fee        | 7.5%                                                                                                               |
| Senior Redemption Fee  | <p>0.05% when coverage is above 120%<br>0.025% when coverage is 110-120%<br>0% when coverage is below 110%</p>     |
| Junior Redemption Fee  | <p>0.20% when coverage is above 120%<br>0.10% when coverage is 110-120%<br>0% when coverage is below 110%</p>      |
| Senior Cooldown Period | None                                                                                                               |
| Junior Cooldown Period | <p>None when coverage is above 120%<br>7 days when coverage is 110-120%<br>35 days when coverage is below 110%</p> |
