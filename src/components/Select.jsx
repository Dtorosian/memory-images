import { data } from '../data/data'
import Option from './Option'

export default function Select({ handleChange }) {
    const selectEl = Object.entries(data).map(([ key, value ]) => (
        <div key={key} className="flex flex-col gap-2 text-black">
            <label className='font-bold tracking-wide' htmlFor={key}>Select a {key}</label>
            <select
                className='bg-white text-black text-center p-2 border border-slate-900 rounded-md cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100  focus:bg-white focus:text-black focus:shadow-sm'
                name={key}
                id={key}
                onChange={handleChange}
            >
                <Option valueArray={value} />
            </select>
        </div>
    ))
    
    return <>{selectEl}</>
}