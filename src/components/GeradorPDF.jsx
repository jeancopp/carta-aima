import React, {useState} from 'react';

import './GeradorPDF.css';

import Formulario from './Formulario';
import PreviewPDF from './PreviewPDF';
import ExportadorPDF from "./ExportadorPDF";

const GeradorPDF = () => {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        email: '',
        telefone: '',
        nie: '',
        ar: '',
        dataIda: '',
        enderecoAima: 'Alameda Mahatma Gandhi, 1600-500, Lisboa',
        cidade: 'Lisboa',
        textoAdicional: '',
        incluirAssinatura: true,
        estruturaMissao: false,
        verPreview: false,
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const dataAtual = new Date();
    return (
        <div className="gerador-container">
            <div className="content">
                Olá!<br/>
                Assim como a maioria dos imigrantes, fiquei por aguardar por meses por atualização no meu processo perante a Agencia para Imigraçóes e Asilo(AIMA).<br/>
                Após o envio de uma carta semelhante a essa, a atualização veio em poucos dias(foi o tempo de chegar lá e andou).<br/>
                A intenção é apenas auxiliar, sem fins lucrativos, não me responsabilizando pelo preencher das informações, nem por eventuais atualizações de quaisquer processos.
                <br/>
                Gere a carta, imprima, leve aos correios, e mande a AIMA.<br/>
                No mais, espero que ajude ;)
                <br/>
            </div>

            <Formulario
                formData={formData}
                onChange={handleChange}
            />
            {
                formData.verPreview &&
                <PreviewPDF
                    formData={formData}
                    date={dataAtual}
                />
            }


            <ExportadorPDF formData={{...formData, dataAtual}}/>

            <div className="info-box">
                <p>
                    <strong>⚠️ Importante:</strong>
                    O PDF é gerado 100% no seu navegador. Nada aqui é salvo. Ao sair, sumiu
                </p>
            </div>
        </div>
    );
};

export default GeradorPDF;