# aria-valid-attr

If set, attributes beginning with `aria-` must match one of the attributes specified in [W3's ARIA States and Properties](https://www.w3.org/TR/using-aria/#aria-states-and-properties-aria-attributes).

The following patterns are considered violations:

```html
  <input aria-labeledby="foo">
```

The following patterns are not considered violations:

```html
  <input aria-labelledby="foo">
```
