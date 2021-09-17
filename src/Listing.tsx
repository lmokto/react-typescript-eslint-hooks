import React from 'react';

const Foo = class extends React.PureComponent {
  return() {
    const { title } = this.context;
    return <div>{this.context}</div>;
  }
};

export default Foo;
