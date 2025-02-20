import React from "react";
import "./Linktree.css";
import imahem_01 from "../../asserts/imagens/imagem-01.jpeg";
import imahem_02 from "../../asserts/imagens/imagem-02.jpeg";
import imahem_03 from "../../asserts/imagens/imagem-03.jpeg";
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe } from "react-icons/fa";





const Linktree = () => {
    return (
        <main className="gradient-background">
            <div className="container">
                <div className="profile">
                    <div className="profile-imagem">
                        <img src={imahem_03} alt="Foto do Blogueiro" className="profile-img" />
                    </div>
                    <div className="profile-info">
                        <h2 className="profile-info-nome">Wilkson Freitas</h2>
                        <h4>Transformamos conexões em experiências inesquecíveis ao unir autenticidade e criatividade para inspirar, engajar e construir juntos algo extraordinário!</h4>

                        <div className="profile-info-rede-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                            <a href="https://blogpessoal.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                        </div>
                        <div className="profile-info-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Parcerias aqui!</a>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Linktree;