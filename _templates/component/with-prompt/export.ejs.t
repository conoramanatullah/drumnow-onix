---
to: src/components/index.ts
inject: true
after: ;
skip_if: export * from './<%= name %>';
---

export * from './<%= name %>';