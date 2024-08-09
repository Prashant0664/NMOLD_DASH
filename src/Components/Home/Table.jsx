import React from 'react'
import { homedatatable } from '../../Data/index'
const Table = () => {
    const [state, setstate] = React.useState(homedatatable);
    const [dir, setdir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, setinterval] = React.useState(10)
    const sortdata = (key) => {
        if (dir === 'asc') {
            setdir('desc')
            const sorteddata = [...state].sort((a, b) => {
                if (a[key] > b[key]) {
                    return 1
                }
                if (a[key] < b[key]) {
                    return -1
                }
                return 0;
            })
            setstate(sorteddata)
        }
        else {
            setdir('asc')
            const sorteddata = [...state].sort((a, b) => {

                if (a[key] < b[key]) {
                    return 1
                }
                if (a[key] > b[key]) {
                    return -1
                }
                return 0;
            })
            setstate(sorteddata)
        }
    }
    const onSearch = (e) => {
        const searchdata = [...state].filter((item) => {
            // return (item.email.includes(e.target.value) || item.name.includes(e.target.value) || item.country.includes(e.target.value))
            return (item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.country.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        setstate(searchdata)
    }
    console.log(start);
    React.useEffect(() => { }, []);
    return (
        <>
            <div className='home-table'>
                <div className=' font-semibold text-[20px] '>
                    Recently Added
                </div>
                <div className=''>
                    <table className='w-full dash-table1'>
                        <tr className=' cursor-pointer table-columns-heights  table-header-row rounded-xl'>
                            <td
                                onClick={() => sortdata('name1')}
                                className='left-rounded'
                            >
                                Sr. No.
                            </td>
                            <td
                                onClick={() => sortdata('name1')}
                            >
                                Item ID
                            </td>

                            <td
                                onClick={() => sortdata('name1')}
                            >
                                Item Name
                            </td>

                            <td
                                onClick={() => sortdata('name4')}
                            >
                                Date
                            </td>
                            <td
                                onClick={() => sortdata('name4')}
                            >
                                Price
                            </td>
                            <td
                                onClick={() => sortdata('name2')}
                            >
                                Category
                            </td>
                            <td
                                onClick={() => sortdata('name3')}
                            >
                                Qty.
                            </td>
                            <td
                                onClick={() => sortdata('name5')}
                            >
                                Supplier
                            </td>
                            <td
                                className='right-rounded'
                                onClick={() => sortdata('name7')}
                            >
                                Status
                            </td>
                        </tr>
                        {state.slice(start, start + interval).map((item, index) => (
                            <tr className='table-columns-heights'>
                                <td>
                                    {index}
                                </td>
                                <td>
                                    {item.name2}
                                </td>
                                <td>
                                    {item.name3}
                                </td>
                                <td>
                                    {item.name4}
                                </td>
                                <td>
                                    {item.name5}
                                </td>
                                <td>
                                    {item.name6}
                                </td>
                                <td>
                                    {item.name7}
                                </td>
                                <td>
                                    {item.name8}
                                </td>
                                <td>
                                    {item.name9[0] === "I" && <div className='bg-green-400 w-[fit-content] px-3 rounded-full'>
                                        {item.name9}
                                    </div>}
                                    {item.name9[0] === "O" && <div className='bg-red-300 w-[fit-content] px-3 rounded-full'>
                                        {item.name9}
                                    </div>}
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className='w-full bottom-pagination right-0 flex justify-center items-center gap-2 mt-2'>
                    <div className='flex gap-2'>
                        <div className=' home-gt-btn cursor-pointer'
                            onClick={() => {
                                setstart(Math.max(0, start - interval))
                            }}
                        >
                            &lt; &nbsp; Back
                        </div>
                        <div className='home-pagination cursor-pointer home-pagination-active'
                            onClick={() => setstart(0)}
                        >
                            1
                        </div>
                        <div className={`home-pagination cursor-pointer ${Math.ceil(start / (interval)) + 1 > 1 ? "" : "hidden"}`}
                            style={{ display: (Math.ceil(start / (interval)) > 0 && (Math.ceil(start / (interval)) + 1) * interval < state.length) ? "block" : "none" }}
                            onClick={() => {
                                setstart(Math.max(0, Math.ceil(start / (interval))) * interval)
                            }}>
                            {Math.ceil(start / (interval)) + 1}
                        </div>
                        <div className={`home-pagination cursor-pointer ${start >= interval ? "hidden" : " hidden "} `}
                            style={{ display: state.length > interval ? "block" : "none" }}
                        >
                            ...
                        </div>
                        <div className={`home-pagination cursor-pointer ${state.length > 15 ? "" : "hidden"} `}
                            onClick={() => setstart(
                                Math.max(0, Math.min(state.length, Math.floor(state.length / interval) * interval))
                            )}
                        >
                            {Math.ceil(state.length / interval)}
                        </div>
                        <div className='home-gt-btn cursor-pointer'
                            onClick={() => {
                                if (start + interval < state.length) setstart(Math.min(state.length, start + interval));
                            }}
                        >
                            Next  &nbsp; &gt;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table