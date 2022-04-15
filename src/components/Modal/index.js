
import './modal.css';

import { FiX} from 'react-icons/fi';

export default function Modal({conteudo, close}){
    return(
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    <FiX size={23} color='#fff'/>
                    Voltar
               </button>
            <div>
                
            <h2>Detalhes do chamado</h2>
            <div className='row'>
                <span>
                    Cliente: <i>{conteudo.cliente}</i>
                </span>
            </div>

            <div className='row'>
                <span>
                    Assunto: <i>{conteudo.assunto}</i>
                </span>
                <span>
                    Cadastrado em: <i>{conteudo.createdFormated}</i>
                </span>
            </div>
            <div className='row'>
                <span>
                    Status: <i style={{color: '#fff', backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c':'#999'}}>{conteudo.cliente}</i>
                </span>
            </div>
                {conteudo.complemento !== '' &&(
                    <>
                    <h3>Complemento</h3>
                    <p>
                        {conteudo.complemento}
                    </p>
                    </>
                )}
            </div>
            </div>
        </div>
    )
}