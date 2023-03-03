import style from './Form.module.scss';

export default function Form() {
    return (
        <form action="" className={style.signature}>
            <div className={style.inputContainer}>
                <input 
                    type="email" 
                    name="email"
                    id="email"
                    placeholder="Insira seu e-mail"
                />
                <button className={style.botao}>Assinar newsletter</button>
            </div>
        </form>
    )
}