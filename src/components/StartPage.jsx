import RegularButton from './RegularButton'
import Select from './Select'

export default function StartPage({ onSubmit, onChange, primaryColor, secondaryColor }) {
    return (
        <div className="flex flex-col justify-center gap-8 text-start">
            <p className="text-lg text-center md:text-xl">
                Customize the game by selecting a category and the number of memory cards
            </p>
            <form className={`${secondaryColor} text-base flex flex-col mx-auto gap-4 rounded-lg p-4 shadow-md w-4/5 lg:w-3/4`}>
                <Select onChange={onChange} />
                <RegularButton onClick={onSubmit} primaryColor={primaryColor}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}