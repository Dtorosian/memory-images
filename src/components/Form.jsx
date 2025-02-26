import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange }) {
    return (
        <div className="flex flex-col gap-8 text-start">
            <p className="text-lg">
                Customize the game by selecting an emoji category and a number of memory cards.
            </p>
            <form className="flex flex-col gap-4 bg-gray-600 text-slate-900 rounded-lg text-lg p-4 ">
                <Select handleChange={handleChange} />
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}