# Badge Component

### Usage

Basic usage:

```javascript
import * as React from 'react';
import { Badge } from '@ebth/design-system';

export default () => {
    return (
        <Badge>Badge Text</Badge>
    );
}
```

### Exports

* `Badge`

### <Foo/> API

* `badgeSize: 'mini' | 'wide'` - Optional
* `badgeStyle: 'success' | 'danger' | 'dark'` - Optional
* `children: Node` - Optional
* `className: string` - Optional

### Presentational components props API

These properties are passed to every presentational (styled) component that is exported:

* `badgeSize: 'mini' | 'wide'`
* `badgeStyle: 'success' | 'danger' | 'dark'`
