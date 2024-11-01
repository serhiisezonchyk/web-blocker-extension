import { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

const Layout = ({ children }: Props) => {
  return <div className="px-4 py-8 space-y-4 text-center">{children}</div>;
};

export default Layout;
