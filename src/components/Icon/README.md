# Icon Component

## Usage

### Basic usage

```javascript
import * as React from 'react';
import { Icon } from '~/public/shared/components';

export default () => {
    return (
        <Icon icon="heart" accessibilityLabel="Follow" />
    );
}
```

## Exports

* `Icon`

## `Icon` API

* `accessibilityLabel: string` - Optional
* `className: string` - Optional
* `icon: string`
* `size: number | string` - Optional
