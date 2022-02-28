# aria-valid-role

If set, values for the `role` attribute must match one of the values specified in [W3's ARIA Roles](https://www.w3.org/TR/using-aria/#aria-roles).

The following patterns are considered violations:

```html
  <div role="button"></div>
```

The following patterns are not considered violations:

```html
  <div role="alert"></div>
```
