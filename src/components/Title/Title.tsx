import React from 'react';
import './Title.css';

export interface CurrentStatus {
  reportsCount: number;
  editorsCount: number;
}

export type TitleProps = {
  title: string;
  currentStatus?: CurrentStatus;
};

export default function Title({ title, currentStatus }: TitleProps) {
  return (
    <section>
      <h2 className="title">{title}</h2>
      {currentStatus && (
        <h3 className={currentStatus.reportsCount > 3.5 ? 'green' : 'red'}>
          There {currentStatus.reportsCount === 1 ? 'is' : 'are'} {currentStatus.reportsCount} {currentStatus.reportsCount === 1 ? 'report' : 'reports'} from {currentStatus.editorsCount} {currentStatus.editorsCount === 1 ? 'editor' : 'editors'}.
        </h3>
      )}
    </section>
  );
}