import { days } from "../../../utils/Days"

export const COLUMNS = [
    {
        Header: "Full Name",
        accessor: (data) => [data.full_name],
    },
    {
        Header: "YE",
        accessor: (data) => [data.ye],
    },
    {
        Header: "Scope",
        accessor: (data) => [data.scope],
    },
    {
        Header: "Utilization",
        accessor: ({ utilization }) => utilization.map(item => item.client_name),
        Cell: ({ row: { original } }) => {
            return (
                <div>
                    {original.utilization.map(((item, index) => (
                        <p key={index}><span>{item.percentage}%</span></p>
                    )))
                    }
                </div>
            )
        }
    },
    {
        Header: "Client",
        accessor: ({ utilization }) => utilization.map(item => item.client_name),
        Cell: ({ row: { original } }) => {
            return (
                < div >
                    {original.utilization.map(((item, index) => (
                        <p key={index}><span>{item.client_name}</span></p>
                    )))
                    }
                </ div >
            )
        }
    }
]