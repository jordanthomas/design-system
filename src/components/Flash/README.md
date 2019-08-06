# Flash Component

## Usage

### Basic usage

```javascript
import * as React from 'react';
import { Flash } from '@ebth/design-system';

export default () => {
    return (
        <Flash>Flash Text</Flash>
    );
}
```

## Exports

* `Flash`

## `Flash` API

* `flashStyle: 'warn' | 'error' | 'success'` - Optional
* `children: Node` - Optional
* `className: string` - Optional
* `heading: string` - Optional
* `showIcon: boolean` - Optional

## Presentational components props API

These properties are passed to every presentational (styled) component that is exported:

* `flashStyle: 'warn' | 'error' | 'success'`
* `showIcon: boolean`
