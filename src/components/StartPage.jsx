import RegularButton from './RegularButton'
import Select from './Select'

export default function StartPage({ onSubmit, onChange, primaryColor, secondaryColor,  backgroundColor }) {
    return (
        <div className="flex flex-col justify-center gap-8 text-start">
            <p className="text-lg text-center">
                Customize the game by selecting an emoji category and a number of memory cards.
            </p>
            <form className={`${secondaryColor} flex flex-col gap-4  bg-opacity-60 rounded-lg text-lg p-4 border border-black shadow-md shadow-gray-500 `}>
                <Select onChange={onChange} backgroundColor={backgroundColor} />
                <RegularButton onClick={onSubmit} primaryColor={primaryColor}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}