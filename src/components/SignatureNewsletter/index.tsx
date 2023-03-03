import Form from './Form'
import style from './Signature.module.scss'

export default function SignatureNewsletter() {
    return (
        <div className={style.texto}>
            <p className={style.info}>Sua casa com as</p>
            <p className={style.titulo}>melhores plantas</p>
            <p className={style.descricao}>
                Encontre aqui uma vasta seleção de plantas 
                para decorar a sua casa e torná-lo uma pessoa 
                mais feliz no seu dia a dia. Entre com seu e-mail 
                e assine nossa newsletter para saber das novidades da marca.
            </p>
            <Form />
        </div>
    )
}