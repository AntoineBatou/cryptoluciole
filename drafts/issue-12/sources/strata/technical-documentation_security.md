> For the complete documentation index, see [llms.txt](https://docs.strata.markets/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://docs.strata.markets/technical-documentation/security.md). Agents can also search and read this documentation through its [MCP server](https://docs.strata.markets/~gitbook/mcp).

# Security

Audits, multisigs and on-chain monitoring.

Strata is committed to a security-centric process across the entire lifecycle of our smart contracts, from development to deployment and ongoing monitoring.

### **Audits**

Strata works with top auditors like Cyfrin, Guardian and Quantstamp to secure the protocol smart contracts. Read more here:

{% content-ref url="/pages/V9rVyYf8q4CoxfhCbJ1i" %}
[Audits](https://docs.strata.markets/technical-documentation/audits.md)
{% endcontent-ref %}

### **Multisigs & Timelocks**

**Admin Multisig**\
A 3-of-4 Gnosis Safe responsible for executing higher-impact protocol actions that require stricter controls but still occur more frequently than full timelock-governed changes. The Admin Multisig manages roles such as `PAUSER_ROLE` and supervises operational parameters that influence system behavior without altering core protocol logic. All actions are subject to a 48h timelock except pausing the protocol and can be cancelled by the Guardian, ensuring strong oversight and protection against misconfiguration or compromise.

**Operational Multisig**\
A dedicated 2-of-3 Gnosis Safe used to execute routine, low-risk protocol actions that require timely updates but do not affect core security parameters. It is managed by trusted contributors and handles tasks such as refreshing APR feeds, performing strategy updates, and maintaining configuration within predefined limits. All activity is constrained by role-based permissions and benefits from additional oversight through the timelock and Guardian.

Know more about roles and permissions for multisigs and timelocks to enhance security and transparency: [Roles and Permissions](https://docs.strata.markets/technical-documentation/roles-and-permissions.md)

### **On-Chain Monitoring**

Our team has built a comprehensive suite of internal and third-party on-chain monitoring tools and bots that continuously track protocol activity. These systems detect anomalies such as unexpected multisig actions, unusual contract interactions, or deviations in expected protocol behavior.

In the event of a critical issue, our monitoring stack can automatically trigger protective responses, including pausing relevant contracts, ensuring rapid mitigation without relying on external infrastructure.
