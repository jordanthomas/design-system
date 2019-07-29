# Tooltip Component

## Usage

### Basic usage

```javascript
import * as React from 'react';
import { Tooltip } from '~/public/shared/components';

export default () => {
    return (
        <Tooltip content="This is the tooltip text">Children wrapped by Tooltip<Tooltip>
    );
}
```

### Component children
If you want to use a component element as a child, ensure you forward the ref to the DOM node (like we do with our `<Icon />` component):

```js
import React, { forwardRef } from 'react'

function ThisWontWork() {
  return <button>Text</button>
}

const ThisWillWork = forwardRef((props, ref) => {
  return <button ref={ref}>Text</button>
})

function App() {
  return (
    <Tooltip content="Tooltip">
      <ThisWillWork />
    </Tooltip>
  )
}
```

## Exports

* `Tooltip`

## `Tooltip` API

* Any props are passed directly through to the Tippy component
