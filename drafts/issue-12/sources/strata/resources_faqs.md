> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/resources/faqs.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# FAQs

Everything you need to know.

### General

<details>

<summary>What is Strata?</summary>

Strata is a generalized risk-tranching protocol that brings structured yield products to any on-chain or off-chain yield strategy by splitting yield into tokenized senior and junior tranches, each tailored to distinct risk–reward profiles.

The protocol introduces two liquid and composable tokens built on the underlying yield product, **Strata Senior Tranche** and **Strata Junior Tranche**.

</details>

<details>

<summary>What problem does Strata solve?</summary>

Strata provides on-chain allocators with structured access to yield products across the risk–reward curve.

* Senior Tranche is suitable for conservative users, offering safe and predictable yields.
* Junior tranche is suitable for risk-tolerant users seeking higher-yield opportunities with greater upside.

\
Know more about Strata’s value proposition here: [Why Strata](https://docs.strata.markets/introduction/why-strata.md)

</details>

<details>

<summary>I have a partnership request. How can I proceed?</summary>

Partnership requests can be directed to the Strata team via Discord, or email (<contact@strata.markets>).

</details>

<details>

<summary>I’m interested in career opportunities at Strata. Where can I apply?</summary>

Send your resume and details about your skillset to: <contact@strata.markets>.

</details>

### Strata Basics

<details>

<summary>What are senior and junior tranches?</summary>

**Strata Senior Tranche**\
An over-collateralized, yield-bearing synthetic dollar, representing the senior risk tranche in Strata’s structure. It delivers superior risk-adjusted yield by providing protection against underlying strategy and collateral risks, guaranteed minimum yield tied to the benchmark rate, and uncapped upside exposure to the underlying yield.

**Strata Junior Tranche**\
A yield-bearing investment product, representing the junior risk tranche in Strata’s structure. It provides leveraged upside to the underlying yield while simultaneously functioning as a liquid insurance pool for the senior tranche. By absorbing excess risk and volatility associated with the underlying yield strategy, junior tranche earns a risk premium from the senior tranche, delivering potentially higher yields for risk-tolerant investors.

</details>

<details>

<summary>What is risk-tranching?</summary>

Risk-tranching is a way to split a single pool of assets or cash flows into distinct layers (tranches), each with a clearly defined risk–reward profile. This allows different users to choose exposure that matches their risk appetite, rather than everyone earning the same blended APY with hidden risks. By design, risk-tranching makes risk explicit and intentional.

Strata implements this fully on-chain by transforming a one-size-fits-all yield into two tokenized, risk-based tranches: senior and junior. The senior tranche is a yield-bearing token with priority on cash flows, while the junior tranche is a risk-bearing token that absorbs losses first in exchange for higher potential returns.

</details>

<details>

<summary>Will Strata launch senior and junior tranches on more yield sources?</summary>

Yes, Strata will expand to offer a wider range of structured yield products built on diverse on-chaina and off-chain yield products, transforming them into over-collateralized, yield-bearing synthetic dollars (senior tranche) and liquid, high-yield investment products (junior tranche) through its generalized risk-tranching mechanism.

</details>

<details>

<summary>Does Strata custody my assets?</summary>

No, Strata is fully non-custodial and uses audited smart contracts to manage deposits and redemptions, ensuring that users maintain control of their assets at all times subject to protocol rules.

</details>

### Minting & Redemption

<details>

<summary>Can anyone mint or redeem senior and junior tranche tokens through Strata?</summary>

Yes, anyone can mint or redeem senior and junior tranche tokens through Strata, as Strata is a fully permissionless protocol, though users must comply with any restrictions associated with their jurisdiction.

</details>

<details>

<summary>How does srUSDe and jrUSDe redemptions work?</summary>

When srUSDe is redeemed, the user receives USDe/sUSDe based on the srUSDe/USDe exchange rate, minus any applicable redemption fees.

At the current stage of protocol implementation:

* srUSDe can be redeemed for USDe and sUSDe through the Strata UI.
* 2.5 bps redemption fee.
* sUSDe redemptions are processed instantly, while USDe redemptions follow a 7 day cooldown period, consistent with Ethena’s sUSDe unbonding period. USDe can be claimed after 7 days in the portfolio section.
* srUSDe can also be traded for other assets on DEXs.

When jrUSDe is redeemed, the user receives USDe/sUSDe based on the jrUSDe/USDe exchange rate, minus any applicable redemption fees.

At the current stage of protocol implementation:

* jrUSDe can be redeemed for USDe and sUSDe through the Strata UI.
* Redemption fee is 10 bps.
* jrUSDe can be instantly redeemed for sUSDe while USDe redemptions follow a 7 day cooldown period, consistent with Ethena’s sUSDe unbonding period. USDe can be claimed after 7 days in the portfolio section.&#x20;
* jrUSDe redemption is temporarily paused when the srUSDe coverage ratio falls below 105%.
* jrUSDe can also be traded for other assets on DEXs.

</details>

<details>

<summary>How does srNUSD and jrNUSD redemptions work?</summary>

When srNUSD is redeemed, the user receives NUSD/sNUSD based on the srNUSD/NUSD exchange rate, minus any applicable redemption fees.

At the current stage of protocol implementation:

* srNUSD can be redeemed for NUSD and sNUSD through the Strata UI.
* 0–5 bps redemption fee is applied depending on the srNUSD coverage level. The applicable fee is displayed on the UI prior to confirmation.
* sNUSD redemptions are processed instantly, while NUSD redemptions follow a 10 day cooldown period, consistent with Neutrl's sNUSD unstaking period. NUSD can be claimed in the portfolio section.
* sNUSD can also be traded for other assets on DEXs.

When jrNUSD is redeemed, the user receives NUSD/sNUSD based on the jrNUSD/NUSD exchange rate, minus any applicable redemption fees.

At the current stage of protocol implementation:

* jrNUSD can be redeemed for NUSD and sNUSD through the Strata UI.
* 0–20 bps redemption fee is applied depending on the srNUSD coverage level. The applicable fee is displayed on the UI prior to confirmation.
* jrNUSD can be redeemed for sNUSD after a cooldown period that ranges from zero up to five weeks, depending on the srNUSD coverage level. The applicable cooldown is displayed on the UI prior to confirmation. During this cooldown period, jrNUSD holders remain exposed to jrNUSD performance. Once the cooldown ends, sNUSD can be claimed in the Portfolio section.
* jrNUSD can also be redeemed for NUSD, subject to the sNUSD cooldown plus an additional 10-day cooldown, consistent with Neutrl’s sNUSD unstaking period. NUSD can then be claimed in the Portfolio section.
* jrNUSD redemption is temporarily paused when the srNUSD coverage ratio falls below the min. threshold.
* jrNUSD can also be traded for other assets on DEXs.

</details>

<details>

<summary>Where can I claim my assets after cooldown?</summary>

You must manually claim USDe/sUSDe or NUSD/sNUSD after redeeming srUSDe/jrUSDe or srNUSD/jrNUSD. Go to the "Portfolio" section on the Strata App and click the "Pending Claims" tab. You can view the assets that are currently in cooldown/unstaking or ready to be claimed/unstaked.

</details>

### Yield Calculation & Distribution

<details>

<summary>How is yield generated?</summary>

Yield comes entirely from pooled collateral which is staked for its yield-bearing version. Strata’s Dynamic Yield Split is the core mechanism that allocates yield generated from the pooled collateral between senior and junior tranche.

</details>

<details>

<summary>How do I earn yield?</summary>

Both senior and junior tranche are yield-bearing assets and built on ERC-4626 contracts with  the same base asset that depends on the underlying market.

Senior tranche exchange rate to the underlying base asset always remains above 1 and continues to increase over time as yield accrues. It always earns a portion of the yield generated on the pooled collateral after paying a risk premium to the junior tranche. This premium is determined by the underlying yield and the relative liquidity across both tranches, and is effectively priced by the market. Its yield has a floor equivalent to the benchmark rate and uncapped upside exposure to the underlying yield.&#x20;

Junior tranche may generate a negative yield when the underlying yield falls below the benchmark rate or in the event of a default, resulting in a portion of the junior tranche reserves being allocated to senior tranche to guarantee its floor APY. Junior tranche exchange rate to the underlying base asset continuously rises or falls as the positive/negative yield accrues, and it can fall below 1 as well during prolonged negative performance or an underlying default event.

</details>

<details>

<summary>How are senior and junior APYs calculated?</summary>

Strata’s Dynamic Yield Split (DYS) mechanism dynamically distributes realized yield from the underlying strategy between the senior and junior tranches. The mechanism references the underlying APY, benchmark rate, relative liquidity distribution between the two tranches and exogenously defined risk-premium parameters. The yield calculation methodology is explained here: [Dynamic Yield Split](https://docs.strata.markets/protocol-mechanism/dynamic-yield-split.md).

</details>

<details>

<summary>How often are senior and junior APYs calculated?</summary>

The yield allocation dynamically adjusts on every protocol event based on the underlying yield, benchmark rate and liquidity in both pools. A detailed technical overview of the protocol and yield distribution mechanism can be found in the [Protocol Overview](https://docs.strata.markets/technical-documentation/protocol-overview.md).

</details>

### Strata Points & Rewards

<details>

<summary>What is the Strata Points Program?</summary>

Strata Points Program is an incentive mechanism designed to reward early users and liquidity providers with Strata Points for helping bootstrap the Strata ecosystem. As a decentralized protocol, Strata’s strength lies in its community, and Strata Points are how we measure and showcase these contributions onchain.

Strata Points and partner incentives can be earned by using Strata, engaging with ecosystem partners, and inviting new users. The program recognizes and tracks contributions across multiple seasons, rewarding those who actively support the protocol’s growth.

</details>

<details>

<summary>What is Strata Season 1?</summary>

Strata Public Mainnet and Season 1 officially launch on Monday, October 13th at 12:00 UTC. This milestone marks a major step forward, marking the transition from the pre-deposit phase to full protocol launch. To support the debut of our first structured yield products built on Ethena USDe, Strata introduced a new season in its Points Program: Season 1. Users who participate in Season 1 Ethena USDe market receive Strata and Ethena Points apart from the underlying yield of srUSDe and jrUSDe. Season 0 participants receive an additional 15% boost in Season 1 Points. Similarly, Neutrl NUSD market participants receive Strata Points as well as Neutrl Points.

</details>

<details>

<summary>What is Strata Season 0?</summary>

Season 0 is the first step in our journey toward the mainnet deployment. This pre-launch, pre-deposit phase is designed to kickstart our platform, onboard USDe collateral, and introduce the Strata Points Program. Users who participate in Season 0 receive boosted Strata Points, along with Ethena and Ethereal points, plus additional rewards.

</details>

<details>

<summary>How long is Season 1 expected to run?</summary>

Season 1 is expected to run until the TGE of Strata Protocol.

</details>

<details>

<summary>How do I earn Strata Points and other rewards?</summary>

Strata and Ethena Points can be earned by holding senior and junior tranche tokens, engaging with ecosystem partners, and inviting new users. The program recognizes and tracks contributions across multiple seasons, rewarding those who actively support the protocol’s growth. Latest partners integrations and rewards can be found [here](https://app.strata.markets/points) on the Strata UI.

</details>

<details>

<summary>Is there any referral program?</summary>

Yes! You receive 10% of the Strata Points earned by anyone who signs up using your unique referral link. Referees get a 10% Strata Points boost when joining through a referral link.

</details>

### Risks & Mitigations

<details>

<summary>What are the risks associated with senior and junior tranches?</summary>

Potential risks of using the Strata Protocol and the mechanisms in place to mitigate them can be found here: [Risks & Mitigations](https://docs.strata.markets/protocol-mechanism/risks-and-mitigations.md)

</details>

<details>

<summary>What happens if the junior tranche is too small?</summary>

To prevent sudden depletion of the junior tranche and to maintain adequate coverage for the senior tranche, the protocol enforces protective safeguards. If the senior coverage ratio falls below predefined thresholds, the protocol may temporarily halt senior minting and junior redemptions, or allow junior redemptions only after a lockup period, depending on the underlying market. Additional details are provided in the respective [market](https://docs.strata.markets/markets/ethena-usde.md) docs.

Coverage is a self-balancing mechanism - the thinner it is, the higher the yield for junior tranche, attracting more liquidity.

</details>

<details>

<summary>Is Strata audited?</summary>

Strata Protocol has completed multiple audits by leading security firms to ensure the highest level of security. The audit reports can be found here: [Audits](https://docs.strata.markets/technical-documentation/audits.md).

</details>

{% hint style="info" %}
**Disclaimer**\
Strata Points do **not** represent equity, fees, or a claim on Strata’s treasury. They have no secondary‑market value and are subject to change as the program evolves. Always consult the Strata app and official announcements for the latest rules and timelines.
{% endhint %}
