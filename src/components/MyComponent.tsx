import React from 'react';

type Props = {
  foo: string;
};

function MyComponent(props: Props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export default MyComponent;
