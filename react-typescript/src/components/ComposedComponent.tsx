import { ReactElement, ReactNode } from 'react';

type ComponentProps = {
  children?: ReactNode;
};

const ComposedComponent = ({ children }: ComponentProps): ReactElement => {
  return (
    <div>
      <h3>Composed Component with children Prop</h3>
      <div style={{ border: '1px solid red', minHeight: 20 }}>{children}</div>
    </div>
  );
};

export default ComposedComponent;
