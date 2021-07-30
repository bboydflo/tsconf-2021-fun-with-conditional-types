---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Inference behavior of conditional types

<question>
Give a type that contains functions that return promisees, can we create a type with the same keys but the value of the promisees as the property types 

```ts
type EnvGetters = {
    "SERVER": () => Promise<string>,
    "PORT": () => Promise<number>
}
type Env = {
    "SERVER": string,
    "PORT": number
}
```

</question>

<answer>

Yes we can using **conditional types**.

</answer>

--- 

### Conditional type summary

* Conditional types have 3 behaviors
    * The type conditional behavior
    * The union distribution behavior
    * The inference behavior

---