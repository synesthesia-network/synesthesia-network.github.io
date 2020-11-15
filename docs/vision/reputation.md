---
id: reputation
title: Reputation
---

This page describes the vision for user reputation on Synesthesia.

## Networks of Trust

Synesthesia requires that all new users be invited by an existing user. The positive and negative
reputation of users that you have invited will flow back to you, and thus users will be incentivized
to only invite those whom they deem trustworthy in the context of on-chain reputation.

### Orphans

Users who regret an invitation they have given out can orphan that user if that users reputation is
net negative. By doing so, the account will be disabled until adopted by another user or deleted by
the account controller. Orphaning an account will automatically trigger
[reputation flow](#reputation-flow).

### Adoption

Any account can set up a two way agreement to be adopted by another user. By doing so, the network
of trust will be modified such that is appears that the adoptive parent was the one who initially
invited the account.

:::note
With this model, networks of trust form pyramids, whereas we probably want to allow users to have
multiple parents such that we can form true networks.
:::

## Reputation

All users will have reputation associated with their account and reputation that will flow upstream
to their network. A user's net reputation is the difference between their positive reputation and
negative reputation. A user's net reputation can be less than 0.

### Positive Reputation

Each user will have a value which represents their positive reputation. This value can grow over
time by performing positive actions on the network. This reputation can be spent by cashing out
dividends.

### Negative Reputation

Each user will also have a value which represents their negative reputation. This value can grow
over time by performing negative actions on the network. This value can never decrease except
through governance intervention.

:::note
Potentially we want to allow that negative reputation can very slowly dissipate on users who have a
net positive reputation.
:::

### Reputation Flow

Positive and negative reputation can flow between users in a network of trust.

If a user obtains positive or negative reputation, some fraction of that will be placed in an upward
and downward flow queue. For example, if a user gains +10 reputation, +1 reputation will be placed
in the upward and downward flow queue.

Upward flow queue will always affect the person that invited the user. Downward flow queue will be
randomly assigned to a single person from among those that the user has invited if it is positive,
or applied to everyone the user has invited if it is negative. Both flows will always be triggered
at the same time for any given user.

Any user can gain a small amount of positive reputation by providing proofs of and initiating
reputation flows onchain. The amount of reputation gained by initiating a flow will be based on the
amount of reputation that sits in the queue, thus a natural incentivization market will form.

## Dividends

The ultimate incentive for users to gain reputation is to be paid dividends in the native token (SYN)
based on their positive status. In fact, reputation dividends will be the primary source of token
issuance on Synesthesia.

To claim your dividends, you must burn some portion of your positive reputation. Reputation
dividends should strike a balance such that users are not incentivized to hoard reputation, but are
also not incentivized to always empty their reputation for tokens.

Users can claim dividends weekly.

An example dividend model could be: To claim a dividend, you will reduce your reputation by half,
but only be paid out the square root of your initial reputation.

So:

| Reputation Before | Reputation After | Dividend  | SYN per Reputation  |
|-------------------|------------------|-----------|---------------------|
| 0                 | 0                | 0 SYN     | 0                   |
| 1                 | 0                | 10 SYN    | 10                  |
| 2                 | 1                | 10 SYN    | 10                  |
| 4                 | 2                | 20 SYN    | 10                  |
| 10                | 5                | 30 SYN    | 6                   |
| 100               | 50               | 100 SYN   | 2                   |
