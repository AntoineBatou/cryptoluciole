> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/protocol-mechanism/mechanism-overview.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Mechanism Overview

Yield distribution and protocol revenue mechanism

Strata is a structured yield protocol offering risk-tranched products across diverse on-chain and off-chain yields. It introduces a two-tranche system, senior and junior, that separates yield and risk into distinct instruments, enabling differentiated risk-return profiles and tailored risk-reward bundling.

* **Senior Tranche:** Designed for capital preservation, the senior tranche offers a stable yield floored at the benchmark rate while retaining uncapped upside participation in the underlying yield, with first-loss protection from the junior tranche against strategy risks.
* **Junior Tranche:** Provides leveraged upside to the underlying yield, absorbing underlying yield volatility and other associated risks in exchange for potentially higher returns.

### Yield Distribution

At the core of Strata’s design is the [Dynamic Yield Split](https://docs.strata.markets/protocol-mechanism/dynamic-yield-split.md) mechanism, which determines how realized yield from the underlying strategy is distributed between the senior and junior tranches. The mechanism references the underlying APY, benchmark rate, relative liquidity distribution between the two tranches and exogenously defined risk-premium parameters. This system enables the senior tranche to benefit from coverage provided by the junior tranche, while allowing the junior tranche to consistently outperform the underlying yield.

<figure><img src="https://content.gitbook.com/content/fOoKrLDBvnKV3tBN5lYD/blobs/6zuqqoffUfnOumZPNkw5/output.png" alt=""><figcaption></figcaption></figure>

* Senior tranche always earns a share of the underlying yield, floored at the benchmark rate, with upside participation in the underlying yield. In extreme scenarios where junior liquidity is depleted and the underlying APY is below the benchmark rate, the senior tranche simply earns the underlying APY.
* Junior tranche captures the residual yield after the senior tranche is paid and functions as first-loss capital. As a result, the junior tranche benefits disproportionately in high-yield environments when the underlying APY exceeds the benchmark rate, but may underperform the underlying yield when it falls below the benchmark.
* As the senior tranche grows relative to the junior tranche, the senior TVL ratio increases, pushing the risk premium higher. This compresses the senior tranche’s share of the underlying yield and increases the junior tranche’s expected return as compensation for taking on the incremental risk of greater senior tranche exposure. Effectively, as more conservative capital flows into the senior tranche, the junior tranche must be compensated at an elevated rate to reflect the additional risk absorbed.

{% hint style="success" %}
This system creates a natural risk–reward equilibrium: investors seeking predictable, protected yields gravitate toward the senior tranche, while investors willing to assume higher risk in exchange for convex upside allocate to the junior tranche.
{% endhint %}

### Protocol Revenue & Fees

Strata Protocol generates revenue through two types of fees applied to its structured yield products, supporting long-term sustainability and ongoing development. All fees are fully transparent and clearly visible on the app interface.

**Performance Fee**\
Strata charges a fixed percentage performance fee on the yield generated from pooled collateral and is disclosed on the respective market docs. All performance fees collected are allocated to the protocol treasury.

**Redemption Fee**\
Strata charges a fee when senior and junior tranche assets are redeemed. This fee is vital for managing the platform's liquidity and maintaining a stable operational framework. In particular, the redemption fee helps to mitigate volatility and discourage short-term, speculative withdrawals from senior and junior tranches. The applicable fee is displayed transparently on the frontend prior to transaction confirmation and is disclosed on the relevant market docs. Redemption fee on each tranche is distributed between respective senior and junior tranche holders, with a portion allocated to the protocol treasury.

{% hint style="info" %}
Performance and redemption fees for the senior and junior tranches for different underlying products are disclosed on their respective [market docs](https://docs.strata.markets/markets/ethena-usde.md).
{% endhint %}
