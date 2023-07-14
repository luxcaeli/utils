## hexToRgba
Convert hexadecimal colors to rgba format.

```typescript
function hexToRgba(hexColor: string, alpha?: number): string;
```

## Usage
```typescript
import { hexToRgba } from 'skylight-utils';

const green = hexToRgba("#5eba7d"); // rgba(94, 186, 125, 1)
const lightGreen = hexToRgba("#5eba7d", 0.5); // rgba(94, 186, 125, 0.5)
```