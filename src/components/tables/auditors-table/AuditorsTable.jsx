import React, { useMemo, useState } from 'react'
import { useGlobalFilter, useSortBy, useTable } from 'react-table'
import { COLUMNS } from './columns'

import { ChevronDownIcon } from "@heroicons/react/24/outline"

// auditorsList 
import auditorList from "../../../data/auditor.json"
import GlobalFilter from '../GlobalFilter'
import Modal from '../../modals/Modal'

const AuditorsTable = () => {
    const [chartData, setChartData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    // table features
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => auditorList || [], [auditorList])
    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state, setGlobalFilter,
        allColumns, getToggleHideAllColumnsProps
    } = tableInstance
    const { globalFilter } = state

    const diagramHandler = (r) => {
        const newArr = r.original.utilization.map(item => item.phase.map(i => {
            return { ...i, ["client_name"]: item.client_name }
        })).flat()
        setChartData({ full_name: r.original.full_name, utilization: newArr })
        setIsModalOpen(true)
    }

    return (
        <div className='p-4 pb-[300px]'>

            {isModalOpen ? (
                <Modal data={chartData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            ) : null}

            <h1 className='mb-4 font-semibold text-center'>Click to the Auditor field to see a diagram</h1>

            <>
                <div className='mb-8'>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>

                {/* table */}
                <div className='overflow-x-scroll'>
                    <Table
                        getTableProps={getTableProps}
                        headerGroups={headerGroups}
                        rows={rows}
                        getTableBodyProps={getTableBodyProps}
                        prepareRow={prepareRow}
                        diagramHandler={diagramHandler}
                    />
                </div>
            </>
        </div>
    )
}

export default AuditorsTable


function Table({ getTableProps, headerGroups, rows, getTableBodyProps, prepareRow, diagramHandler }) {
    return (
        <table  {...getTableProps} className="w-full text-sm print:text-[10px] print:mt-0 whitespace-nowrap">
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='sticky top-0'>
                            {headerGroup.headers.map(column => (
                                <th className='py-2 text-black bg-cblue' {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div className='flex items-center justify-start gap-1 px-4'>
                                        {column.render("Header")}
                                        <ChevronDownIcon className={` ${column.isSorted ? column.isSortedDesc ? "-rotate-180" : "rotate-0" : "hidden"} w-3 transition-all`} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr onClick={() => diagramHandler(row)} className='[&:nth-child(even)]:bg-gray-100 hover:[&:nth-child(even)]:bg-cblue/20 hover:bg-cblue/20 font-semibold transition-all' {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td className='py-2 px-4' {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}