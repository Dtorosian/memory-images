import { data } from '../data/data'
import Option from './Option'

export default function Select({ onChange, backgroundColor }) {
    const selectEl = Object.entries(data).map(([ key, value ]) => (
        <div key={key} className="flex flex-col gap-2 mb-3">
            <label className={`font-bold tracking-wide text-center md:text-2xl`}htmlFor={key}>Select a {key}</label>
            <select
                className={`bg-white text-black text-center p-2 rounded-md cursor-pointer transition duration-150 ease-in-out md:text-xl hover:shadow-sm hover:bg-gray-200 active:bg-gray-200`}
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