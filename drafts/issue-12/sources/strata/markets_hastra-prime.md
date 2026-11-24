> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/hastra-prime.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Hastra PRIME

Structured Yield Products on Hastra PRIME

Hastra [PRIME](https://hastra.io/prime) is a tokenized deposit into Democratized Prime, a warehouse lending facility that finances Home Equity Lines of Credit (HELOCs) originated by [Figure Technologies](https://www.figure.com/). The facility provides capital to support the origination and funding of HELOCs, giving investors exposure to a diversified pool of residential credit assets secured by homeowners' equity.

While HELOCs carry lower risk relative to other credit products, they still have exposure to tail risk events such as interest rate shocks, housing market downturns, liquidity stress etc.

The one-size-fits-all design of Hastra PRIME is not ideal for many investors across DeFi and TradFi as different capital allocators have varying risk appetites and return expectations, which a single yield product cannot fully satisfy.

Strata is purpose-built to deliver structured yields on PRIME by transforming underlying risk into programmable tranches, allowing depositors to access the underlying yield with built-in protection or opt for higher returns by taking on incremental risk. At the same time, tranching PRIME significantly improves the product’s composability across the broader DeFi ecosystem.

The protocol introduces two liquid and composable tokens built on Hastra PRIME: **Strata Senior PRIME (srPRIME)** and **Strata Junior PRIME (jrPRIME)**.

* **srPRIME (Senior Tranche):** Senior PRIME is a liquid, yield-bearing derivative of Hastra PRIME that provides low-risk exposure to a HELOC-backed lending facility originated by Figure Technologies. It is designed to offer safe, structurally uncorrelated yield in DeFi with built-in protection against underlying credit and counterparty risks.
* **jrPRIME (Junior Tranche):** Junior PRIME is a liquid, yield-bearing derivative of Hastra PRIME that provides leveraged upside to the yield generated from Figure’s HELOC-backed lending facility. It acts as first-loss capital underwriting underlying credit and counterparty risks, and in return earns a risk premium from the Senior tranche.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FkryEkfy1FAGAKZDQQdr8%2FPicture%20for%20.docs.png?alt=media&amp;token=59b5a34a-f017-4f4a-8d17-cc5ab22b602d" alt=""><figcaption></figcaption></figure>

#### Market Specifications

<table data-header-hidden><thead><tr><th width="275.515625"></th><th width="474.06640625"></th></tr></thead><tbody><tr><td>Underlying Protocol</td><td>Hastra</td></tr><tr><td>Yield Source</td><td>PRIME</td></tr><tr><td>Base Asset</td><td>USDC</td></tr><tr><td>Benchmark</td><td>None</td></tr><tr><td>Performance Fee</td><td>5%</td></tr><tr><td>Senior Redemption Fee</td><td><p>0.05% when coverage is above 115%</p><p>0.025% when coverage is 110-115%</p><p>0% when coverage is below 110%</p></td></tr><tr><td>Junior Redemption Fee</td><td>0.15% when coverage is above 115%<br>0.075% when coverage is 110-115%<br>0% when coverage is below 110%</td></tr><tr><td>Senior Cooldown Period</td><td>None</td></tr><tr><td>Junior Cooldown Period</td><td>None when coverage is above 115%<br>7 days when coverage is 110-115%<br>14 days when coverage is below 110%</td></tr><tr><td>Min. Coverage Threshold</td><td>105%</td></tr></tbody></table>
