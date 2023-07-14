## minMaxBetween
Returns the number between the minimum and maximum number
```typescript
function minMaxBetween(value: number, min: number, max:number): number;
```

## Usage
```tsx
/**
 * Limit entered point between min, max number
 */ 
const handlePointChange = (e) => {
    setPoint(minMaxBetween(e.target.value, 0, 100));
}
```
