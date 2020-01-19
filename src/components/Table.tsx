import React from 'react';

import './Table.scss';

/**
 * Displays a table
 */
const Table = ({
	columns,
	dataSource,
	className,
	alignRight,
	emptyText,
	pagination,
	paginationOptions,
}: TableProps) => (
	<div className="table-container">
		<table className={`table ${className}`}>
			<thead>
				<tr className="table-header">
					{columns.map((column) => (
						<th key={column.key}>{column.title}</th>
					))}
				</tr>
				<tr>
					<td className="table-divider" colSpan={columns.length} />
				</tr>
			</thead>
			<tbody>
				{dataSource.length > 0 ? (
					dataSource.map((row, i) => (
						<tr key={`${row.key}-${i}`}>
							{columns.map((column, j) => {
								const lastColumn = j + 1 === columns.length && alignRight;
								return (
									<td key={`${row[column.key]}-${i}${j}`} className={lastColumn ? 'align-right' : ''}>
										{row[column.key]}
									</td>
								);
							})}
						</tr>
					))
				) : (
					<tr>
						<td colSpan={columns.length} className="table-void">
							{emptyText}
						</td>
					</tr>
				)}
			</tbody>
		</table>
		{pagination && (
			<div className="table-footer">
				<p>
					Page {paginationOptions.page + 1} / {Math.ceil(paginationOptions.total / paginationOptions.pageSize)}
				</p>
				<i
					className="fas fa-chevron-left pointer"
					onClick={() => paginationOptions.goToPage(paginationOptions.page - 1)}
				/>
				<i
					className="fas fa-chevron-right pointer"
					onClick={() => paginationOptions.goToPage(paginationOptions.page + 1)}
				/>
			</div>
		)}
	</div>
);

interface Column {
	key: string;
	title: string;
}

interface PaginationOptionsProps {
	goToPage: (page: number) => void;
	page: number;
	pageSize: number;
	total: number;
}

interface TableProps {
	/**
	 * Title and key of each column
	 */
	columns: Array<Column>;
	/**
	 * Data for each row, must follow the key of each column
	 */
	dataSource: Array<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
	/**
	 * Class of the table
	 */
	className: string;
	/**
	 * Align the last column to the right
	 */
	alignRight: boolean;
	/**
	 * Text to display if there is no data
	 */
	emptyText: string;
	/**
	 * Set pagination for the table
	 */
	pagination: boolean;

	paginationOptions: PaginationOptionsProps;
}

export default Table;
