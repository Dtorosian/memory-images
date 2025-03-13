import { data } from '../data/data'
import Option from './Option'

export default function Select({ handleChange }) {
    const selectEl = Object.entries(data).map(([ key, value ]) => (
        <div key={key} className="flex flex-col gap-2 text-gray-300">
            <label className='font-bold tracking-wide' htmlFor={key}>Select a {key}</label>
            <select
                className='bg-slate-900 text-gray-300 text-center p-2 border border-slate-900 rounded-md cursor-pointer hover:bg-gray-400 hover:text-slate-900 focus:bg-gray-400 focus:text-slate-900 focus:shadow-sm'
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