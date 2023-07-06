import './Button.css'

function Button(){
    return (
        <div className="Button">
            <button>Click Me!</button>
        </div>
    )
}

function ButtonOne() {
    return (
        <div className='ButtonOne'>
            <button>
                Click Me Now!
            </button>
        </div>
    )
}

export default Button; //default button export
export {ButtonOne}; //named export

