---
id: chat
title: Chat Integration
---

This page describes the vision for chat integration on Synesthesia.

## Why

All blockchain communities collect themselves in discussion using traditional chat platforms. The
blockchain itself does not provide a friendly or useful platform for discussion. Synesthesia will
take dependencies on centralized, but established chat providers to act as soft authorities on the
network.

It is easy to see this relationship as a breach of the decentralized and consensus driven nature of
blockchains. However it is important to state that all actions of chat integration get reported to
the blockchain through a set of trusted oracles acting as bots in the chat.

## Discord

The only planned chat integration for Synesthesia at the moment will be Discord.

### Account Verification

Synesthesia's chat integration will be gated by the highest level of Discord verification:

* https://support.discord.com/hc/en-us/articles/216679607-What-are-Verification-Levels-

This means that any user in the chat must:

1. Have a verified email on their Discord account.
2. Be registered on Discord for more than 5 minutes.
3. Be registered on the Synesthesia server for more than 10 minutes.
4. Have a verified phone number on their Discord account.

Here we place a reasonable trust into the Discord verification process such that it cannot be easily
manipulated.

### Reputation Building

On chain reputation can develop by participating in chat. A reputation bot will live on the channel
and track the participation of users. The protocol for reputation building will be simple to start:

* +1 reputation per 24 hours for participating in chat
* +1 reputation per post that per 5 "engagement" user reactions
* -1 reputation per post that per 3 "warning" user reactions

User reactions will start simple:

* Engagement: `:thumbsup:`, `:thumbsdown:`
* Warning: `:warning:`

### Democracy Voting

New democracy proposals can appear in a special channel as a message from a Synesthesia bot.
`:thumbsup:` and `:thumbsdown:` reactions can be used to for verified users to simply vote on
these proposals. Using the link between the user's discord account and Synesthesia account, an
oracle can place that vote on behalf of the user.

Users can configure whether they would want to allow this on-chain.

### Balance Transfers

In any Synesthesia chatroom, users will be able to initiate transfers to other users by simply
typing and confirming a message.
