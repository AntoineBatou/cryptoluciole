> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/markets/saturn-usdat.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Saturn USDat

Structured Yield Products on Saturn USDat

[Saturn](https://saturn.credit/) [USDat](https://saturncredit.gitbook.io/saturn-docs/solution/usdat-overview) is a US Treasuries–backed stablecoin, and [sUSDat](https://saturncredit.gitbook.io/saturn-docs/solution/susdat-overview) is its yield-bearing version, earning yield from T-Bills and dividends on [STRC](https://www.strategy.com/strc), [Strategy’](https://www.strategy.com/)s short-term, high-yield preferred equity.

sUSDat is Saturn’s yield-bearing vault token built on the ERC-4626 standard. It represents a user’s share in a managed pool of digital credit exposure, where yield is generated from Saturn’s STRC holdings and automatically passed through to holders. Unlike typical yield-bearing stablecoins, the sUSDat/USDat exchange rate (NAV) is variable, as it reflects changes in STRC’s market price. While STRC is designed to trade close to its par value ($100) through its dividend distribution mechanism, its price can fluctuate based on market expectations around credit risk.

We’re seeing a new financial stack take shape across three layers:

1. **Digital Capital** is Bitcoin.
2. **Digital Credit** is Strategy STRC.
3. **Digital Money** & **Digital Yield** built on top of Digital Credit.

Michael Saylor outlined a vision of transforming programmable digital credit into digital money and digital yield.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FAlXEK9BHEXL46WqEUZJ5%2FScreenshot%202026-05-01%20at%2016.25.55.png?alt=media&amp;token=4fe3811a-4c7c-4b28-8d7a-c492705f720d" alt=""><figcaption></figcaption></figure>

Strata is purpose-built to realize this vision by delivering structured yields on USDat. It transforms sUSDat into programmable tranches, allowing depositors to access STRC Digital Credit yield with fixed rate, no volatility and built-in protection or opt for amplified dividend yields by taking on leveraged exposure to STRC performance and sUSDat volatility and underwriting underlying strategy and collateral risks as first-loss capital. At the same time, the tranching of sUSDat significantly improves the composability of Strategy’s Bitcoin credit product across the broader DeFi ecosystem.

The protocol introduces two liquid and composable tokens built on Saturn sUSDat: **Strata Senior USDat (srUSDat)** and **Strata Junior USDat (jrUSDat)**.

* **srUSDat (Senior Tranche):** Senior USDat is a yield-bearing derivative of sUSDat that provides low-risk exposure to Saturn’s Bitcoin credit yield via STRC. It is designed to offer a fixed yield (65% of STRC dividend rate) with no volatility and protection against underlying strategy and collateral risks.
* **jrUSDat (Junior Tranche):** Junior USDat is a liquid, yield-bearing derivative of sUSDat that provides leveraged upside to sUSDat yield, while absorbing its volatility from STRC exposure and underwriting underlying strategy and collateral risks as first-loss capital.

<figure><img src="https://4067234938-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfOoKrLDBvnKV3tBN5lYD%2Fuploads%2FZK6cAEPg68oPRbV6bpAG%2Fimage_2026-04-30_16-12-52.png?alt=media&amp;token=d6b74334-a32e-4a98-8066-74a9f2cdad48" alt=""><figcaption></figcaption></figure>

#### Market Specifications

<table data-header-hidden><thead><tr><th width="275.515625"></th><th width="474.06640625"></th></tr></thead><tbody><tr><td>Underlying Protocol</td><td>Saturn</td></tr><tr><td>Yield Source</td><td>sUSDat</td></tr><tr><td>Base Asset</td><td>USDat</td></tr><tr><td>Benchmark</td><td>65% of STRC Dividend Rate</td></tr><tr><td>Performance Fee</td><td>0%</td></tr><tr><td>Senior Redemption Fee</td><td><p>0.05% when coverage is above 130%</p><p>0.025% when coverage is 115-130%</p><p>0% when coverage is below 115%</p></td></tr><tr><td>Junior Redemption Fee</td><td><p>0.20% when coverage is above 130%</p><p>0.10% when coverage is 115-130%</p><p>0% when coverage is below 115%</p></td></tr><tr><td>Senior Cooldown Period</td><td>None</td></tr><tr><td>Junior Cooldown Period</td><td><p>7 days when coverage is above 130%</p><p>14 days when coverage is 115-130%</p><p>28 days when coverage is below 115%</p></td></tr><tr><td>Min. Coverage Threshold </td><td>107.5%</td></tr></tbody></table>
