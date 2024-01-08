// IpoTable.js
import React from 'react';
import { useTable } from 'react-table';

const IpoTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Company Name', accessor: 'companyName' },
      { Header: 'Symbol', accessor: 'symbol' },
      { Header: 'Offering Date', accessor: 'offeringDate' },
      { Header: 'Price Range (Low)', accessor: 'priceRangeLow' },
      { Header: 'Price Range (High)', accessor: 'priceRangeHigh' },
      { Header: 'Shares', accessor: 'shares' },
      { Header: 'Volume', accessor: 'volume' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IpoTable;
