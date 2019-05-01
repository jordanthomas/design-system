# Button Component

### Usage

Basic usage:

```javascript
import * as React from 'react';
import { Button } from '~/public/shared/components';

export default () => {
    return (
        <Button>Button Text</Button>
    );
}
```

### Exports

* `Button`

### `Button` API

* `buttonDisplay: 'block' | 'iconOnly'` - Optional
* `buttonSize: 'extra-sm' | 'sm' | 'lg' | 'xl'` - Optional
* `buttonStyle: 'primary' | 'primary-important' | 'primary-contrast' | 'primary-danger' | 'secondary' | 'secondary-important' | 'secondary-danger' | 'link'` - Optional
* `children: Node` - Optional
* `className: string` - Optional
* `disabled: boolean` - Optional
* `inFlight: boolean` - Optional
    <br/>Disables button and displays `<LoadingDots />` animation.
* `type: 'button' | 'submit' | 'reset'` - Optional
    <br/>Defaults to `'button'`


### Presentational components props API

These properties are passed to every presentational (styled) component that is exported:

* `buttonDisplay: 'block' | 'iconOnly'`
* `buttonSize: 'extra-sm' | 'sm' | 'lg' | 'xl'`
* `buttonStyle: 'primary' | 'primary-important' | 'primary-contrast' | 'primary-danger' | 'secondary' | 'secondary-important' | 'secondary-danger' | 'link'`

### Dependencies

Utilizes `<LoadingDots />` to animate `inFlight` state.
