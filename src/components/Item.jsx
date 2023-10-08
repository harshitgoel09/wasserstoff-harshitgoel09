import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import ControlPanel from './ControlPanel';


const Item = (props) => {


    return (
        <>


            <div className='flex justify-start flex-wrap p-5'>

                {props.list.map((val, idx) => {
                    return (
                        <div className='bg-blue-50 h-36 w-40 rounded-md m-3 hover:shadow-md'>
                            <p className='font-bold mt-4 ml-14'>{val.item_name}</p>
                            <div className='flex p-2 justify-center'>
                                <FaRupeeSign className='h-3 w-3 m-1' />
                                <span className='text-xs text-slate-500'>{val.item_price} </span>
                            </div>

                            <ControlPanel item={val} />
                        </div>)
                })}
            </div>
        </>
    )
}

export default Item