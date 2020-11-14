---
id: problems
title: Known Problems
---

This page describes the known problems with implementing the vision of Synesthesia.

## Front Running

Synesthesia Network will look to allow users to grow their balance by performing positive actions on
the network. A common example of this is providing a proof that the chain should perform a certain
action.

Such a proof would be feeless to provide and reward the user if done correctly.

However, a current problem with this is that any trivial and user friendly design would be
susceptible to front running, where another user can observe the positive action, and submit a
transaction themselves that takes priority and claims the reward.

Even worse, the original user may be penalized for submitting "repeated" data.

A solution to this could involve a commit and reveal scheme to all proofs, but this is generally not
super user friendly to design, especially given the delay between the two steps.

## Other

Have you found other problems to our vision?

If so, please let us know by opening an issue with that information.
