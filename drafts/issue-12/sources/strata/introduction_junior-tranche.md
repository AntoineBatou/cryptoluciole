> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/introduction/junior-tranche.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Junior Tranche

High Return, Moderate Risk Tranche

Junior tranche is a yield-bearing investment product, representing the junior risk tranche in Strata’s structure. It provides leveraged upside to the underlying yield while simultaneously functioning as a liquid insurance pool for the senior tranche. By absorbing excess risk and volatility associated with the underlying yield strategy, junior tranche earns a risk premium from the senior tranche, delivering potentially higher yields for risk-tolerant investors.

Junior tranche receives the residual yield after the senior tranche is paid and absorbs any shortfall when underlying yield falls below the guaranteed minimum yield for senior tranche tied to the benchmark rate and in event of potential default by the underlying yield source. As a result, junior tranche outperforms the underlying yield in high-yield environments but may underperform when the underlying yield drops below the benchmark rate.\
\
Junior tranche may generate a negative yield when the underlying yield falls below the benchmark rate or in the event of a default, resulting in a portion of the junior tranche reserves being allocated to senior tranche to guarantee its floor APY. Junior tranche exchange rate to the underlying base asset continuously rises or falls as the positive/negative yield accrues, and it can incur full principal loss as well during prolonged negative performance or an underlying default event as it acts as the first-loss capital.

Junior tranche yield can be further traded on Pendle's yield trading platform to hedge or speculate through its Principal Token (PT) and Yield Token (YT), unlocking a new class of structured yield products. Strata tranches yield by risk, while Pendle tranches yield by time. Together, they form a unified yield-curve<>risk-curve marketplace, something traditional finance does not fully offer within a single system.

Explore the junior tranches currently available on Strata:\
Strata x Ethena: [Junior USDe (jrUSDe)](https://docs.strata.markets/markets/ethena-usde/jrusde.md)\
Strata x Neutrl: [Junior NUSD (jrNUSD)](https://docs.strata.markets/markets/neutrl-nusd/jrnusd.md)\
Strata x Midas x Hyperithm: [Junior mHYPER (jrmHYPER)](https://docs.strata.markets/markets/midas-mhyper/jrmhyper.md)

{% hint style="success" %}
Junior tranche is well-suited for users with a more aggressive risk profile, including DeFi-native power users, hedge funds, and yield farmers who seek higher yields and have a slightly higher risk tolerance.
{% endhint %}

<figure><img src="https://content.gitbook.com/content/fOoKrLDBvnKV3tBN5lYD/blobs/DxdunseC9LuwF8dDZVDT/image_2026-02-05_00-41-43%20(1).png" alt=""><figcaption></figcaption></figure>

### Key features:

* **Instant minting and redemption:** Users can mint junior tranche instantly without any fee and redeem with or without a lockup and redemption fee that depends on the coverage available for the senior tranche. Lockup periods and fee parameters vary by underlying yield, so it’s recommended to review the [markets](https://docs.strata.markets/markets/ethena-usde.md) page for each individual strategy. Users can also trade it on secondary markets using any asset on DEXs.&#x20;
* **Leveraged yield exposure:** Junior tranche allows risk-tolerant investors to capture enhanced returns from underlying’s variable APY while assuming increased exposure to yield volatility and underlying strategy risks.
* **Liquid insurance fund:** Junior tranche acts a first-loss capital absorbing the volatility and underlying yield strategy risks and earns a risk premium from the senior tranche, resulting in higher yields for investors who are comfortable taking on more risk.
* **Composable and efficient:** Built on the ERC-4626 tokenized vault standard, junior tranche is a fully permissionless and transferable token designed for seamless integration across DeFi and CeFi, delivering capital efficiency, flexibility, and broad accessibility.
* **Omni-chain liquidity:** Junior tranche token is built on LayerZero’s OFT standard, enabling assets to be minted/redeemed across multiple chains and allows seamless cross-chain transfers, ensuring unified and efficient liquidity.
