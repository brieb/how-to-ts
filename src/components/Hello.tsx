import * as React from 'react';

type Props = {
  message: string;
};

function Hello({ message }: Props) {
  return <div>{message}</div>;
}

export default Hello;
