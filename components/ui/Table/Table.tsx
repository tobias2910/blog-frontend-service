import React, { FC, ReactNode } from 'react';
import s from './Table.module.css';

interface TableProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

const Table: FC<TableProps> = ({ children }) => (
  <table className={s.table}>{children}</table>
);

const TableHead: FC<TableProps> = ({ children }) => (
  <th className={s.tableHead}>{children}</th>
);

const TableData: FC<TableProps> = ({ children }) => (
  <td className={s.tableData}>{children}</td>
);

export { Table, TableHead, TableData };
