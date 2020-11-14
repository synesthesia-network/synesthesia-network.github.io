---
id: accounts
title: Accounts
---

This page describes the vision for accounts on Synesthesia.

## Sybil Resistance

Accounts will be tested for "sybil resistance" on sign up

* Offchain phone number verification via trusted registry
* Discord Bot?

## Networks of Trust

Accounts will natively form networks of trust.

* Referral links from existing users to sign up
* Each user will be loosely tracked to the user they signed up with.
* These loose connections can be used offline to track behaviors of networks.
* Proofs can be reported to the chain when bad actors are isolated to propagate reputation changes.

## Account Hierarchies

Accounts will natively be placed into hierarchies based on various criteria.

* Users with more tokens can attest to that and lock their tokens to gain status. As long as they
keep their tokens, they will remain in that role.
* Users can be nominated into privileged roles which automatically elevate their status.

## Two-Layer Control and Recovery

Accounts will be split into a two-layer control system. The first layer will be
a hot account that is used everyday by the end user and the second layer will be
a cold account that holds all state information about a user. Synesthesia will
automatically forward calls from the hot account to the cold account.

Cold accounts will not have any known private key to access the account.

If a hot account is lost, reverification of the registration process can recover
access to the cold account.

Users can optionally allow a feature to freeze a hot account in the case it is compromised. Economic
games can be used to ensure this is not abused.

* https://github.com/paritytech/substrate/tree/master/frame/recovery
