import React from 'react'

import { CategoriesData } from '../../Data/index'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
const CategoriesComponent = () => {
    const [state, setstate] = React.useState(CategoriesData);
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
                                Serial No.
                            </th>
                            <th
                                onClick={() => sortdata('name2')}
                            >
                                Category
                            </th>
                            <th
                                onClick={() => sortdata('name3')}
                            >
                                Edit
                            </th>
                            <th
                                onClick={() => sortdata('name4')}
                            >
                                Delete
                            </th>
                        </tr>
                        {state.slice(start, start + interval).map((item, index) => (
                            <tr className='h-[2rem]'>
                                <td>
                                    <div className=''>

                                        {item.name1}

                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name2}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        <div className='py-[2px] cursor-pointer flex gap-3 px-4 justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 15" fill="none">
                                                <path d="M0.928711 11.8225V14.2291C0.928711 14.4508 1.11204 14.625 1.34538 14.625H3.87871C3.98704 14.625 4.09538 14.5854 4.17038 14.5062L13.2704 5.86915L10.1454 2.9004L1.05371 11.5375C0.970378 11.6166 0.928711 11.7116 0.928711 11.8225ZM15.687 3.57332C15.7643 3.50008 15.8256 3.41308 15.8674 3.31731C15.9092 3.22154 15.9307 3.11887 15.9307 3.01519C15.9307 2.91151 15.9092 2.80884 15.8674 2.71307C15.8256 2.6173 15.7643 2.53031 15.687 2.45707L13.737 0.604565C13.66 0.531175 13.5684 0.47295 13.4676 0.433223C13.3668 0.393496 13.2587 0.373047 13.1495 0.373047C13.0404 0.373047 12.9323 0.393496 12.8315 0.433223C12.7307 0.47295 12.6391 0.531175 12.562 0.604565L11.037 2.05331L14.162 5.02207L15.687 3.57332Z" fill="black" />
                                            </svg>
                                            <div className=''>
                                                Edit
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        <div className='py-[2px] cursor-pointer flex gap-3 px-4 justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 15" fill="none">
                                                <path d="M9.34521 1.16667L8.51188 0.375H4.34522L3.51188 1.16667H0.595215V2.75H12.2619V1.16667H9.34521ZM1.42855 13.0417C1.42855 13.9125 2.17855 14.625 3.09521 14.625H9.76188C10.6785 14.625 11.4285 13.9125 11.4285 13.0417V3.54167H1.42855V13.0417ZM3.09521 5.125H9.76188V13.0417H3.09521V5.125Z" fill="black" />
                                            </svg>
                                            <div className=''>
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className='bottom-pagination w-full right-0 flex justify-center items-center gap-2 mt-2'>
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

export default CategoriesComponent