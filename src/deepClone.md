## deepClone
Recursively deep clone value.

```typescript
function deepClone<T>(value: T): T;
```

## Usage
```typescript
import { deepClone } from '@puresky/utils';

const originManky = { manky: { banana: 1 } };
const deepCopiedManky = deepClone(originManky);

console.log(originManky.manky === deepCopiedManky.manky); // false
```