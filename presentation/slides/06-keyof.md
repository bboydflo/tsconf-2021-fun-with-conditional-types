---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Getting the keys of a type

<question>

How can we get a type with all the keys in an object type ?

```ts

type Person = { name: string; age: number }
type PersonKeys = "name" | "age"

```
</question>

<answer>

Using the `keyof` operator

</answer>

---

### Getting the type of a variable

<question>

How can we get a type of a variable?
```ts
let env = {
    "SERVER": "url",
    "PORT": 8080
}
type Env = {
    "SERVER": string,
    "PORT": number
}
```

</question>
<answer>

Use the `typeof` operator

</answer>

