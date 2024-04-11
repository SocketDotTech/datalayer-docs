---
id: introduction
title: What is SocketDL?
sidebar_position: 1
---

Socket Data Layer (SocketDL) is an arbitrary message passing protocol part of Socket's Interoperability stack.

Socket Interoperability stack includes [SocketLL](https://docs.socket.tech/socket-overview/what-is-socket) & SocketDL. SocketLL enables seamless bridging of assets across chains, while SocketDL enables secure and trust-less message passing.

Together, these enable building robust cross-chain applications

### Features of Socket DL

1. **Arbitrary Message Passing** : Arbitrary Message Passing allows a contract on Chain A to send a message (`bytes` encoded) to a contract on Chain B. This allows contracts on different chains to read and write to each other's state.
2. **Modular Architecture** : SocketDL has a modular architecture which allows dApps to choose parts of the Socket stack they'd like to use. For instance, dApps can use Socket for message verification and validation, but can build their own off-chain agents for message delivery and execution.
3. **Security w/ Configurability** : Socket allows [Plugs](./Learn/Components/Plugs.md) to configure [Switchboards](./Learn/Components/Switchboards.md) used for message passing w/ other plugs. dApps can configure different levels of security using switchboards. For example, using native bridge for critical messaging, but n/n validator consensus for faster relatively less secure communication.
4. **Easy spec to build** : Smart contracts simply need to inherit [PlugBase](https://github.com/SocketDotTech/socketDL-examples/blob/main/src/base/PlugBase.sol) and support a simple [interface](./dev-resources/Interfaces/IPlug.md) to add cross-chain capabilities to its functions

Learn more about SocketDL [architecture](./Learn/protocol-architecture.md), [message lifecycle](./Learn/lifecycle.md) & [components](./Learn/Components/_category_.json).

### Use Cases

1. **App Chain Tokens**

   ERC-20 that can be bridged b/w chains through a Lock-n-Mint or Burn-n-Mint mechanism, secured by SocketDL. They don't require protocols to bootstrap liquidity for the token across chains.

   Live in production powering USDC bridging on [Aevo's Optimistic App-Chain](https://mirror.xyz/0x6FD2bd90D50eDEe139103454116F252f6F5eC928/s602ukNdxwBkr9imWWO2MBgzpNny0O1ews_Nev75ppM). Learn more [here](https://github.com/SocketDotTech/app-chain-token).

2. **DeFi Composability**

   - Cross-chain lending and borrowing
   - Multi-chain Yield aggregators
   - Cross-chain Deposits (Zaps)

3. **Gaming and NFTs**

   Chain agnostic NFTs that can be bridged/minted between chains. This also enables unique usecases for on-chain gaming

4. **New usecases**

   Chain Abstracted Wallets, Governance, Data Availability,

_& much more!_
