import { ReactNode } from 'react';

interface IHeaderProps {
  children: ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <div className="MaxWidthWrapper HeaderWrapper mx-auto flex justify-between items-center py-6">
      {children}
    </div>
  );
}
