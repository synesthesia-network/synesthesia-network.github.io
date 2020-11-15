---
id: hierarchies
title: Hierarchies
---

This page describes the vision for user hierarchies on Synesthesia.

## Ranks

Synesthesia will natively support a rank system that users are placed into.

Generally ranks will be based on an amount of tokens a user has voluntarily locked on their account,
however some ranks may be assigned to a user through governance or nomination processes.

For the purposes of illustration, you can imagine the following hierarchy:

| Number of Locked Tokens | Rank Name |
|-------------------------|-----------|
| 0                       | Private   |
| 10                      | Sergeant  |
| 100                     | Captain   |
| 1000                    | Major     |
| 10000                   | Colonel   |
| 100000                  | General   |

## Access Control

The different pallets on Synesthesia will be gated by access control layers based on a users rank.

For example:

| Rank Name | Access                          |
|-----------|---------------------------------|
| Private   | Native Token Transfers          |
| Sergeant  | + Fungible Token Transfers      |
| Captain   | + Interact with Smart Contracts |
| Major     | + Participate in Governance     |
| Colonel   | + Create New Fungible Token     |
| General   | + Create New Smart Contracts    |


This design will allow us to make bold decisions about pallet design since there will now be user
requirements for even interacting with a specific pallet. For example, you can imagine that we may
be able to make first time voting on any democracy proposal a free transaction knowing that only
users with a high enough balance would be able to successfully make that call, thus limiting sybil
attack vectors.

## Perks

Using the rank system, users may also receive additional perks that have not all been well defined
yet.

One such example is a number of free transactions per week:

| Rank Name | Free Txs Per Week |
|-----------|-------------------|
| Private   | 0                 |
| Sergeant  | 1                 |
| Captain   | 5                 |
| Major     | 10                |
| Colonel   | 20                |
| General   | 20                |

Beyond access to pallets, certain ranks may even grant additional privileges within a pallet.

For example, a Colonel you may only be allowed to create one new fungible token, but as a major you
can create up to three.
