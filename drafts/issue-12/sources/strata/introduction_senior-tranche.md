> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/introduction/senior-tranche.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Senior Tranche

Low Risk, Moderate Return Tranche

Senior tranche is an over-collateralized, yield-bearing synthetic dollar, representing the senior risk tranche in Strata’s structure. It delivers superior risk-adjusted yield by providing protection against underlying strategy and collateral risks, guaranteed minimum yield tied to the benchmark rate, and uncapped upside exposure to the underlying yield.

Senior tranche exchange rate to the underlying base asset always remains above 1 and continues to increase over time as yield accrues. It always earns a portion of the yield generated on the pooled collateral after paying a risk premium to the junior tranche. This premium is determined by the underlying yield and the relative liquidity across both tranches, and is effectively priced by the market. Its yield has a floor equivalent to the benchmark rate and uncapped upside exposure to the underlying yield.&#x20;

In extreme scenarios where the junior tranche is fully depleted and unable to provide risk coverage, particularly if the underlying yield underperforms the benchmark for a prolonged period, the senior tranche will simply earn the APY of the underlying yield source. In the event of a complete depletion of the junior tranche's first-loss capital due to an underlying's insolvency event, the senior tranche may also incur a loss of principal.

Senior tranche yield can be further traded on Pendle's yield trading platform to hedge or speculate through its Principal Token (PT) and Yield Token (YT).

Explore the senior tranches currently available on Strata:\
Strata x Ethena: [Senior USDe (srUSDe)](https://docs.strata.markets/markets/ethena-usde/srusde.md)\
Strata x Neutrl: [Senior NUSD (srNUSD)](https://docs.strata.markets/markets/neutrl-nusd/srnusd.md)\
Strata x Midas x Hyperithm: [Senior mHYPER (srmHYPER)](https://docs.strata.markets/markets/midas-mhyper/srmhyper.md)

{% hint style="success" %}
Senior tranche is ideal for users with a conservative risk profile, including institutions, DAOs, and TradFi retail savers seeking stable, high quality yields with minimized risk.
{% endhint %}

<figure><img src="https://content.gitbook.com/content/fOoKrLDBvnKV3tBN5lYD/blobs/VUp2aeouKaF21C2Y6ik4/image_2026-02-05_00-41-43.png" alt=""><figcaption></figcaption></figure>

### Key features:

* **Instant minting and redemption:** Users can seamlessly mint or redeem senior tranche token without any lockup, or trade it on secondary markets using any asset on DEXs.&#x20;
* **In-built insurance and over-collateralization:** Senior tranche is fully backed by the underlying base asset, with additional coverage provided by the junior tranche, ensuring capital preservation and risk-minimized yield.
* **Stable and predictable yield:** Senior tranche provides a guaranteed minimum yield at the benchmark rate with uncapped upside exposure to the underlying yield, offering investors a reliable and stable yield on the underlying asset.
* **Composable and efficient:** Built on the ERC-4626 tokenized vault standard, senior tranche is a fully permissionless and transferable token designed for seamless integration across DeFi and CeFi, delivering capital efficiency, flexibility, and broad accessibility.
* **Omni-chain liquidity:** Senior tranche token is built on LayerZero’s OFT standard, enabling assets to be minted across multiple chains and allows seamless cross-chain transfers, ensuring unified and efficient liquidity.
