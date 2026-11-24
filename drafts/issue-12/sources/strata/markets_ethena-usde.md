> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/ethena-usde.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Ethena USDe

Structured Yield Products on Ethena USDe

The one-size-fits-all design of Ethena’s sUSDe, although elegant and simple, is not ideal for many investors across DeFi and TradFi. Different capital allocators have varying risk appetites\
and return expectations, which a single yield product cannot fully satisfy.

Strata is purpose-built to deliver structured yields on USDe, Ethena’s synthetic dollar backed by delta-neutral positions on blue-chip crypto assets. It allows investors to customize their risk and return exposure through two tranches, Senior and Junior, while earning crypto-native yields sourced from carry and basis trades.

The protocol introduces two liquid and composable tokens built on Ethena’s reward-bearing synthetic dollar, sUSDe: **Strata Senior USDe (srUSDe)** and **Strata Junior USDe (jrUSDe)**.

* **srUSDe (Senior Tranche):** Designed for capital preservation, srUSDe offers a stable yield floor benchmarked to Aave’s USDC/USDT lending rates while still participating in the upside of sUSDe APY.
* **jrUSDe (Junior Tranche):** Provides leveraged upside to sUSDe’s variable APY, absorbing sUSDe APY volatility and other associated risks in exchange for potentially higher returns.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FDrzCEmrriGUYQ28TGae4%2F5.png?alt=media&amp;token=46e70144-b089-429c-9170-b91ecb3e56ac" alt=""><figcaption></figcaption></figure>

Ethena’s yield engine combined with Strata’s risk-tranching democratises access to tailored, risk-adjusted yields by unlocking a new class of investment products. By bringing together the principles of traditional structured finance with DeFi’s programmability and composability, Strata delivers enhanced risk-adjusted yields and capital efficiency, reinforcing USDe’s position as a core asset for scalable, programmable crypto-native yields in DeFi.

#### Market Specifications

| Underlying Protocol   | Ethena                                                                        |
| --------------------- | ----------------------------------------------------------------------------- |
| Yield Source          | sUSDe                                                                         |
| Base Asset            | USDe                                                                          |
| Benchmark             | Supply-weighted average of USDC and USDT lending rates on Aave v3 Core market |
| Performance Fee       | 5%                                                                            |
| Senior Redemption Fee | 0.025%                                                                        |
| Junior Redemption Fee | 0.10%                                                                         |
