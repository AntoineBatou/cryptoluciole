> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/midas-mm1-usd.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Midas mM1-USD

Structured Yield Products on Midas mM1-USD

Midas [mM1-USD](https://midas.app/mm1-usd) is a tokenized investment product powered by [Midas](https://midas.app/) that tracks the performance of the [M1 Capital](https://m1-capital.com/)  Master USD Fund, which runs a diverse set of market-neutral strategies across the digital assets space.

M1 Capital partnered with Midas and Strata to tokenize and distribute its flagship multi-strategy USD fund in DeFi via risk-tranched products. Strata’s risk-tranching mechanism transforms mM1-USD into two tokenized tranches with clearly structured risk and return profiles.

The one-size-fits-all design of Midas mM1-USD is not ideal for many investors across DeFi and TradFi as different capital allocators have varying risk appetites and return expectations, which a single yield product cannot fully satisfy. With senior and junior tranches, investors can access the same underlying fund with the risk-return profile that suits them, from capital preservation to leveraged upside. At the same time, tranching mM1-USD significantly improves the product’s composability across the broader DeFi ecosystem.

The protocol introduces two liquid and composable tokens built on Midas mHYPER: **Strata Senior mM1-USD (srmM1-USD)** and **Strata Junior mM1-USD (jrmM1-USD)**.

* **srmM1-USD (Senior Tranche):** Senior mM1-USD is a liquid, yield-bearing derivative of mM1 that provides low-risk exposure to M1 Capital's flagship market-neutral strategy. It is designed to exhibit no volatility similar to a yield-bearing dollar while protected against any underlying strategy and counterparty risks.
* **jrmM1-USD (Junior Tranche):** Junior mM1-USD is a liquid, yield-bearing derivative of Midas mM1-USD that provides leveraged upside to the M1 Capital’s market-neutral strategy. In exchange, it absorbs any NAV losses during an epoch and underwrites the underlying strategy and counterparty risks as first-loss capital.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FfDNjOEumJR9qfPJAqvXj%2Fimage_2026-04-13_13-56-57.png?alt=media&amp;token=f3aef005-4fa4-4088-b520-d39a56d7c53d" alt=""><figcaption></figcaption></figure>

#### Market Specifications

<table data-header-hidden><thead><tr><th width="275.515625"></th><th width="474.06640625"></th></tr></thead><tbody><tr><td>Underlying Protocol</td><td>Midas</td></tr><tr><td>Yield Source</td><td>mM1-USD</td></tr><tr><td>Base Asset</td><td>USDC</td></tr><tr><td>Benchmark</td><td>0%</td></tr><tr><td>Performance Fee</td><td>7.5%</td></tr><tr><td>Senior Redemption Fee</td><td><p>0.05% when coverage is above 120%</p><p>0.025% when coverage is 110-120%</p><p>0% when coverage is below 110%</p></td></tr><tr><td>Junior Redemption Fee</td><td>0.20% when coverage is above 120%<br>0.10% when coverage is 110-120%<br>0% when coverage is below 110%</td></tr><tr><td>Senior Cooldown Period</td><td>None</td></tr><tr><td>Junior Cooldown Period</td><td>None when coverage is above 120%<br>14 days when coverage is 110-120%<br>28 days when coverage is below 110%</td></tr></tbody></table>
