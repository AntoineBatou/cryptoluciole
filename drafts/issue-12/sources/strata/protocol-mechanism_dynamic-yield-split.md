> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/protocol-mechanism/dynamic-yield-split.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Dynamic Yield Split

The core mechanism that powers Strata's risk-tranching protocol.

### Overview

Strata’s Dynamic Yield Split (DYS) mechanism dynamically distributes realized yield from the underlying strategy between the senior and junior tranches. The mechanism references the underlying APY, benchmark rate, relative liquidity distribution between the two tranches and exogenously defined risk-premium parameters. This mechanism creates a natural balance between risk and reward, ensuring efficient capital utilization while maintaining stability and optmizing risk–reward.&#x20;

#### TVL Ratios

$$
TVL\_{ratio\_{sr}} = \frac{TVL\_{sr}}{Total\ TVL}
$$

$$
TVL\_{ratio\_{jr}} = \frac{TVL\_{jr}}{Total\ TVL}
$$

Where:

* $${Total\ TVL}={TVL\_{sr}}+{TVL\_{jr}}$$
* $${TVL\_{sr}}$$ and $${TVL\_{jr}}$$ represent the total underlying asset deposits in the senior and junior tranches, respectively.

These ratios determine the distribution of yield and risk between the two tranches. A higher senior TVL ratio indicates greater demand for safety, which increases the risk premium paid to the junior tranche.

#### Benchmark Rate

Senior tranche offers a minimum guaranteed APY tied to the benchmark rate, which is different for each market. For e.g., the current benchmark rate for Ethena USDe market is supply-weighted average of USDC and USDT lending rates on Aave v3 Core market, calculated as:

$$
\text{Benchmark Rate} =
\frac{
(\text{Supply}*{USDC} \times \text{LendingAPY}*{USDC})
\+
(\text{Supply}*{USDT} \times \text{LendingAPY}*{USDT})
}{
\text{Supply}*{USDC} + \text{Supply}*{USDT}
}
$$

{% hint style="info" %}
Latest benchmark for each market can be found in their respective [market](https://docs.strata.markets/markets/ethena-usde.md) docs.
{% endhint %}

#### Senior Tranche Yield

$$
APY\_{sr} = \max \left( Floor\ APY\_{sr},\ Base\ APY \times (1 - Risk\ Premium\_{sr}) \right)
$$

Where:

* $$Base\ APY $$: Yield of the underlying asset (e.g., sUSDe).
* $$Floor\ APY\_{sr}$$: Minimum guaranteed APY of the senior tranche linked to the benchmark rate.
* $$Risk\ Premium\_{sr}$$​: Percentage of the $$Base APY$$ paid by the senior tranche to the junior tranche for the risk coverage.

#### Risk Premium

$$
Risk\ Premium\_{sr} = x + y \times (TVL\_{ratio\_{sr}})^k
$$

Where:

* $$x$$: Baseline risk premium that senior tranche pays to the junior tranche.
* $$y$$: Maximum additional premium applied that may be applied as the $$TVL\_{ratio\_{sr}}$$ increases.
* $$k$$: Exponential scaling factor controlling the additional premium growth with the $$TVL\_{ratio\_{sr}}$$.

As more liquidity flows into the senior tranche, the $$TVL\_{ratio\_{sr}}$$ increases, pushing the risk premium higher — rewarding junior tranche with higher yields for absorbing more risk.

| Market        | x     | y     | k   |
| ------------- | ----- | ----- | --- |
| Ethena USDe   | 10%   | 12.5% | 0.3 |
| Neutrl NUSD   | 15%   | 15%   | 0.3 |
| Midas mHYPER  | 12.5% | 15%   | 0.3 |
| Midas mM1-USD | 12.5% | 15%   | 0.3 |
| Saturn USDat  | 100%  | 0%    | 0.3 |
| Hastra PRIME  | 5.0%  | 7.5%  | 0.3 |

{% hint style="info" %}
Initial risk premium parameters are set by the core team, but over time independent professional risk managers will take over, actively modeling and monitoring underlying risks to recommend these parameters.
{% endhint %}

#### Junior Tranche Yield

$$
APY\_{jr} = \frac{(Base\ APY - APY\_{sr}) \times TVL\_{ratio\_{sr}}}{TVL\_{ratio\_{jr}}} + Base\ APY
$$

The junior tranche receives:

* The base yield from the underlying source, plus
* The risk premium paid by the senior tranche, scaled by the TVL ratio between tranches.

This structure amplifies returns for the junior tranche, providing leveraged upside to the underlying yield.

#### Senior Coverage and Junior Overperformance

The senior tranche is backed by additional coverage from the junior tranche and, in exchange, receives a leveraged yield relative to the underlying APY, determined as follows:

$$
Coverage\_{srUSDe} = \frac{\text{Total TVL}}{\text{TVL}\_{sr}}
$$

$$
Overperformance\_{jrUSDe} = \frac{\text{APY}\_{jr}}{\text{Base APY}}
$$

{% hint style="info" %}
To prevent sudden depletion of the junior tranche and to maintain adequate coverage for the senior tranche, the protocol enforces protective safeguards. If the senior coverage ratio falls below predefined thresholds, the protocol may temporarily halt senior minting and junior redemptions, or allow junior redemptions only after a lockup period, depending on the underlying market. Additional details are provided in the respective [market](https://docs.strata.markets/markets/ethena-usde.md) docs.
{% endhint %}

#### Senior & Junior APY Simulations

The table below shows the estimated APYs of senior and junior tranches under different underlying APY, benchmark rate and senior TVL ratio scenarios assuming x=15%, y=15% and k=0.3.

<figure><img src="https://content.gitbook.com/content/fOoKrLDBvnKV3tBN5lYD/blobs/dk8fh9XKraKYrOoUmMr5/Picture1.png" alt=""><figcaption></figcaption></figure>
