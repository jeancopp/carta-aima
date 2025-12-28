import React from 'react';
import './Formulario.css';

const Formulario = ({formData, onChange}) => {
    return (
        <div className="form-container">
            <h2>Dados da carta</h2>

            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={onChange}
                        required
                        placeholder="Digite o nome completo"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endereco">Endereço Completo</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={formData.endereco}
                        onChange={onChange}
                        required
                        placeholder="Digite o endereço completo"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        placeholder="email@exemplo.com"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={onChange}
                        placeholder="000 000 000"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nie">NIE (Número de estrangeiro)</label>
                    <input
                        type="text"
                        id="nie"
                        name="nie"
                        value={formData.nie}
                        onChange={onChange}
                        placeholder="0000000"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ar">Autorização de Residencia(AR)</label>
                    <input
                        type="text"
                        id="ar"
                        name="ar"
                        value={formData.ar}
                        onChange={onChange}
                        placeholder="00X0X0000"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dataIda">Data de Ida a AIMA</label>
                    <input
                        type="date"
                        id="dataIda"
                        name="dataIda"
                        value={formData.dataIda}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="enderecoAima">Endereço AIMA</label>
                    <input
                        type="text"
                        id="enderecoAima"
                        name="enderecoAima"
                        value={formData.enderecoAima}
                        onChange={onChange}
                        placeholder="Alameda Mahatma Gandhi, 1600-500, Lisboa"
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="estruturaMissao"
                            checked={formData.estruturaMissao}
                            onChange={onChange}
                        />
                        Para Estrutura de Missão
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Sua Cidade</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={onChange}
                        placeholder="Sua Cidade"
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="textoAdicional">
                        Texto Adicional (opcional)
                    </label>
                    <textarea
                        id="textoAdicional"
                        name="textoAdicional"
                        value={formData.textoAdicional}
                        onChange={onChange}
                        rows="4"
                        placeholder="Adicione algum pedido ou algo assim. No meu caso, questionei se haveria problema em viajar ao Brasil"
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="incluirAssinatura"
                            checked={formData.incluirAssinatura}
                            onChange={onChange}
                        />
                        Incluir espaço para assinatura ao final
                    </label>
                </div>
                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="verPreview"
                            checked={formData.verPreview}
                            onChange={onChange}
                        />
                        Pré-visualizar
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Formulario;