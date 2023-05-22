import { format } from 'date-fns'
import React, { Fragment, useState } from 'react'
import { days } from '../../../utils/Days'
import DatePicker from '../../date-picker/DatePicker'

// data
import auditorList from "../../../data/auditor.json"

const CustomTable = () => {
	const [date, setDate] = useState([{ startDate: new Date("January 1, 2023"), endDate: new Date("January 30, 2023"), key: 'selection' }])
	// const [date, setDate] = useState([{ startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), endDate: new Date(Date.now()), key: 'selection' }])
	const start = format(date[0].startDate, "yyyy-MM-dd")
	const end = format(date[0].endDate, "yyyy-MM-dd")
	const arrOfDays = days(start, end)
	const cells = arrOfDays.map((item) => item)

	return (
		<div>
			<h1 className='text-2xl text-center font-semibold mb-8 p-4'>Custom table</h1>

			<div className='w-[300px] ml-auto mb-4'>
				<DatePicker date={date} setDate={setDate} />
			</div>

			<div className='grid grid-cols-2 2xl:grid-cols-[1fr,2fr]'>

				{/* left */}
				<div className=''>
					<header className='grid grid-cols-[max-content,auto,auto,auto,max-content] font-bold  text-sm  divide-x '>
						<span className='bg-sky-700 text-white/90 p-1 flex-1'>Full name</span>
						<span className='bg-sky-700 text-white/90 p-1 px-4 text-center'>YE</span>
						<span className='bg-sky-700 text-white/90 p-1 px-4 text-center'>Scope</span>
						<span className='bg-sky-700 text-white/90 p-1 px-4 text-center'>Utilization</span>
						<span className='bg-sky-700 text-white/90 p-1 px-4 flex-1'>Clients name</span>

						{/* auditor list */}
						{auditorList.map((auditor, index) => {
							return (
								<Fragment key={index} >
									<span className='border bg-gray-100 text-black p-1 pr-4 flex-1'>{auditor.full_name}</span>
									<span className='border bg-gray-100 text-black p-1 px-4 text-center'>{auditor.ye}</span>
									<span className='border bg-gray-100 text-black p-1 px-4 text-center'>{auditor.scope}</span>
									<div className='border bg-gray-100 text-black p-1 px-4 '>
										{auditor.utilization.map((item, index) => (
											<div className='text-center' key={index}>{item.percentage}%</div>
										))}
									</div>
									<div className='border bg-gray-100 whitespace-nowrap text-black p-1 px-4 flex-1'>
										{auditor.utilization.map((item, index) => (
											<div className='border border-transparent' key={index}>{item.client_name}</div>
										))}
									</div>
								</Fragment>
							)
						})}
					</header>
				</div>

				{/* right */}
				<div className='overflow-x-scroll'>
					{/* days */}
					<header className='grid grid-flow-col justify-start items-start'>
						{arrOfDays.map((item, index) => (
							<span key={index} className='whitespace-nowrap px-2 border-l font-semibold bg-sky-700 text-white/90 text-sm p-1 w-[65px]'>{item}</span>
						))}
					</header>

					{/* diagram */}
					<div>
						{auditorList.map((auditor, index) => (
							<div key={index} className='py-1 border border-transparent'>
								{auditor.utilization.length ? auditor.utilization.map((util, index) => {
									const newArr = util.phase.map(item => days(item.from, item.to)).flat()
									return (
										<div key={index} className='grid grid-flow-col justify-start'>
											{cells.map((item, index) => {
												return (
													<div className={`${newArr.includes(item) ? "bg-yellow-700" : null} border w-[65px] h-[22px]`} key={index}></div>
												)
											})}
										</div>
									)
								}) : (
									<div key={index} className='grid grid-flow-col'>
										<div className='h-[22px] border border-transparent' key={index}></div>
									</div>
								)}
							</div>
						))}

					</div>

				</div>
			</div>
		</div>
	)
}

export default CustomTable

