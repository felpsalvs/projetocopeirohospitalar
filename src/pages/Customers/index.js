
import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Customers(){
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereço, setEndereço] = useState('');

   async function handleAdd(e){
        e.preventDefault();

        if(nomeFantasia !== '' && cnpj !== '' && endereço !== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                endereço: endereço
            })
            .then(()=>{
                setNomeFantasia('');
                setCnpj('');
                setEndereço('');
                toast.info('Paciente cadastrado com sucesso!');
            })
            .catch((error)=>{
                console.log(error);
                toast.error('Erro ao cadastrar esse paciente.');
            })
        }else{
            toast.error('Preencha todos os campos!')
        }
    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name='Pacientes'>
                    <FiUser size={25}/>
                </Title>
            <div className='container'>
                <form className='form-profile customers' onSubmit={handleAdd}>
                    <label>Nome</label>
                    <input type='text' placeholder='Nome do paciente' value={nomeFantasia} onChange={(e)=>setNomeFantasia(e.target.value)}/>
                    <label>Data de nascimento</label>
                    <input type='text' placeholder='Data de nascimento do paciente' value={cnpj} onChange={(e)=>setCnpj(e.target.value)}/>
                    <label>Leito</label>
                    <input type='text' placeholder='Numeração do Leito' value={endereço} onChange={(e)=>setEndereço(e.target.value)}/>

                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
            </div>
        </div>
    )
}