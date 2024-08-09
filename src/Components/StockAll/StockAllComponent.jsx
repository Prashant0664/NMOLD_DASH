import React from 'react'

import { stockData } from '../../Data/index'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
const StockAllComponent = () => {
    const [state, setstate] = React.useState(stockData);
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
    React.useEffect(() => { }, []);
    return (
        <>
            <div className='home-table2 rounded-xl'>
                <div className=''>
                    <table className='w-full dash-table1 bg-white'>
                        <tr className='border border-solid cursor-pointer border-black h-[2rem]' style={{ backgroundColor: "white" }}>
                            <th
                                onClick={() => sortdata('name1')}
                            >
                                S.No.
                            </th>
                            <th
                                onClick={() => sortdata('name1')}
                            >
                                Stock No.
                            </th>
                            <th
                                onClick={() => sortdata('name2')}
                            >
                                Date
                            </th>
                            <th
                                onClick={() => sortdata('name3')}
                            >
                                Supplier
                            </th>
                            <th
                                onClick={() => sortdata('name4')}
                            >
                                Category
                            </th>
                            <th
                                onClick={() => sortdata('name5')}
                            >
                                Qty
                            </th>
                            <th onClick={() => sortdata('name6')}>
                                Product Name
                            </th>
                            <th onClick={() => sortdata('name6')}>
                                Status
                            </th>
                        </tr>
                        {state.slice(start, start + interval).map((item, index) => (
                            <tr className='h-[2rem]'>
                                <td>
                                    <div className=''>

                                        {item.name1[2]}

                                    </div>
                                </td>
                                <td>
                                    <div className=''>

                                        {item.name2}

                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name3}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name4}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name5}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name6}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name7}
                                    </div>
                                </td>

                                <td className=''>
                                    <div className='flex justify-center items-center' style={{ backgroundColor: "" }}>
                                        {item.name8 === "Full" && <div className='bg-green-400 w-[fit-content] px-3 rounded-full flex items-center'
                                            style={{ backgroundColor: "rgb(74,222,128)" }}>
                                            {item.name8}
                                        </div>}
                                        {item.name8 === "Incomplete" && <div className='bg-red-300 w-[fit-content] px-3 rounded-full'
                                            style={{ backgroundColor: "rgb(252,165,165)" }}>
                                            {item.name8}
                                        </div>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className=' bottom-pagination w-full right-0 flex justify-center items-center gap-2 mt-2'>
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

export default StockAllComponent