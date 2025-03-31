import { data } from '../data/data'
import Option from './Option'

export default function Select({ onChange, backgroundColor }) {
    const selectEl = Object.entries(data).map(([ key, value ]) => (
        <div key={key} className="flex flex-col gap-2 mb-3">
            <label className={`font-bold tracking-wide text-center `}htmlFor={key}>Select a {key}</label>
            <select
                className={`${backgroundColor} text-center p-2 border border-black rounded-md cursor-pointer transition duration-150 ease-in-out  active:${backgroundColor} focus:shadow-sm`}
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