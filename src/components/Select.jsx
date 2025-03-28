import { data } from '../data/data'
import Option from './Option'

export default function Select({ onChange }) {
    const selectEl = Object.entries(data).map(([ key, value ]) => (
        <div key={key} className="flex flex-col gap-2 text-black mb-3">
            <label className='font-bold tracking-wide text-center' htmlFor={key}>Select a {key}</label>
            <select
                className={`bg-white text-black text-center p-2 border border-black rounded-md cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100  focus:bg-white focus:text-black focus:shadow-sm`}
                name={key}
                id={key}
                onChange={onChange}
            >
                <Option valueArray={value} />
            </select>
        </div>
    ))
    
    return <>{selectEl}</>
}