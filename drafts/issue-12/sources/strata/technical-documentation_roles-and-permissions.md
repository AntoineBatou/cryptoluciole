> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/technical-documentation/roles-and-permissions.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Roles and Permissions

Roles and permissions for multisigs and timelocks to enhance security and transparency.

The protocol uses a role-based access control system managed through the **AccessControlManager** contract.

**AccessControlManager**

`0x1d19E18ECaC4ef332a0d5d6Aa3a0f0f772605f60`

Each role is assigned to a specific caller (multisig or timelock) and governs sensitive protocol actions.

**PAUSER\_ROLE**\
**Callable by:** Admin Multisig\
**Description:** Pause or resume deposits and redemptions in Senior and Junior tranches.\
**Functions:**

* `StrataCDO::setActionStates`\
  Sets action states for the tranche
* `StrataCDO::setJrtShortfallPausePrice`\
  Sets the JRT shortfall price at which deposits automatically pause

**UPDATER\_FEED\_ROLE**\
**Callable by:** Operational Multisig\
**Description:** Triggers APR refresh and recalculation.\
**Functions:**

* `Accounting::onAprChanged`\
  Triggers fetching new APRs to update `srtTargetIndex`
* `AprPairFeed::updateRoundData`\
  Pulls APR values from the provider and updates when deviation is detected

**UPDATER\_STRAT\_CONFIG\_ROLE**\
**Callable by:** 24h Timelock\
**Description:** Updates strategy risk parameters and cooldown periods.\
**Functions:**

* `Accounting::setRiskParameters`
* `sUSDeStrategy::setCooldowns`

**RESERVE\_MANAGER\_ROLE**\
**Callable by:** 24h Timelock\
**Description:** Redistributes reserve back to tranche TVL or withdraws protocol reserve to the treasury wallet.\
**Functions:**

* `StrataCDO::reduceReserve`\
  Transfers reserve to the treasury
* `StrataCDO::distributeReserve`\
  Distributes reserve assets to the tranches
* `StrataCDO::setReserveTreasury`\
  Sets the treasury wallet for reserve withdrawals

**PROPOSER\_CONFIG\_ROLE**\
**Callable by:** Admin Multisig\
**Description:** Proposes changes to exit-fee configuration parameters in the TwoStepConfigManager contract.\
**Functions:**

* **`TwoStepConfigManager::scheduleExitFeeChange`**\
  Schedules a new exit-fee configuration to take effect after the required delay.

**OWNER\_ROLE**\
**Callable by:** 48h Timelock\
**Description:** High-level protocol methods that modify configuration.\
**Functions:**

* `Accounting::setAprPairFeed`\
  Sets the APR feed contract
* `Accounting::setReserveBps`\
  Sets the percentage of gains allocated to reserves
* `Accounting::setFeeRetentionBps`\
  Sets the portion of fees returned to tranche TVL (remainder goes to reserve)
* `Accounting::setMinimumJrtSrtRatio`\
  Hard minimum Jrt/Srt ratio below which Jrt withdrawals are halted
* `Accounting::setMinimumJrtSrtRatioBuffer`\
  Protective buffer ratio at which Srt deposits are halted
* `UnstakCooldown::setImplementations`\
  Sets unstake implementations for supported assets (e.g. sUSDe)
* `AprPairFeed::setProvider`\
  Sets the new APR provider
* `AprPairFeed::setRoundStaleAfter`\
  Sets the duration after which a round becomes stale
