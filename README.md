# departments.org.ai

Standard business departments as Business-as-Code. Defines common organizational departments with typed metadata and a fetchable dataset.

## Usage

```typescript
import { get, search, things } from 'departments.org.ai'

// Get a department by ID
const engineering = await get('Engineering')

// Search departments
const results = await search('finance')

// Load all departments
const all = await things
```

## License

CC-BY-SA-4.0 - See [LICENSE](./LICENSE) and [ATTRIBUTION.md](./ATTRIBUTION.md)
