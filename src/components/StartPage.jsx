import RegularButton from './RegularButton'
import Select from './Select'

export default function StartPage({ onSubmit, onChange, primaryColor }) {
    return (
        <div className="flex flex-col justify-center gap-8 text-start">
            <p className="text-lg text-center">
                Customize the game by selecting an emoji category and a number of memory cards.
            </p>
            <form className={`flex flex-col gap-4 bg-gray-200 bg-opacity-60 text-black
             rounded-lg text-lg p-4 border border-black shadow-md shadow-gray-500 `}>
                <Select onChange={onChange} />
                <RegularButton onClick={onSubmit} primaryColor={primaryColor}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}