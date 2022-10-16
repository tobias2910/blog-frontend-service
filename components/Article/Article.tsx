/* eslint-disable react/require-default-props */
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Url } from 'url';

interface ArticleProps {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const StyledHr = () => <hr className="border-1 border-secondary mb-2" />;
const StyledH1 = ({ children }: { children?: ReactNode }) => (
  <div className="w-full">
    <h1 className="text-3xl font-semibold mb-2"> {children}</h1>
    <StyledHr />
  </div>
);
const StyledH2 = ({ children }: { children?: ReactNode }) => (
  <div className="w-full">
    <h1 className="text-2xl font-semibold my-2"> {children}</h1>
    <StyledHr />
  </div>
);
const StyledLink = ({
  as,
  href,
  children,
}: {
  as?: Url;
  href: string;
  children?: ReactNode;
}) => (
  <Link as={as} href={href}>
    <a className="text-secondary-2 hover:underline decoration-secondary-2 duration-500">
      {children}
    </a>
  </Link>
);
const StyledBlockqoute = ({ children }: { children?: ReactNode }) => (
  <div className="bg-zinc-800 rounded p-2 ml-8"> {children}</div>
);

const StyledList = ({ children }: { children?: ReactNode }) => (
  <li className="list-disc list-inside">{children}</li>
);

const StyledTable = ({ children }: { children?: ReactNode }) => (
  <table className="table-auto w-full border rounded-lg border-secondary-2 border-separate my-2">
    {children}
  </table>
);

const StyledTableHead = ({ children }: { children?: ReactNode }) => (
  <th className="underline decoration-secondary underline-offset-4 py-2 text-xl">
    {children}
  </th>
);

const StyledTableData = ({ children }: { children?: ReactNode }) => (
  <td className="hover:bg-secondary-2 hover:text-secondary rounded w-1/2 p-2 pl-2 duration-300">
    {children}
  </td>
);

const Article: FC<ArticleProps> = ({ content }) => (
  <div className="w-full">
    <MDXRemote
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...content}
      components={{
        hr: StyledHr,
        h1: StyledH1,
        h2: StyledH2,
        // @ts-ignore
        a: StyledLink,
        li: StyledList,
        blockquote: StyledBlockqoute,
        table: StyledTable,
        th: StyledTableHead,
        td: StyledTableData,
      }}
    />
  </div>
);

export default Article;
