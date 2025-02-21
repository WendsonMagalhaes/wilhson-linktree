import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { BsEnvelopeAt } from "react-icons/bs";
import imagem_01 from "../../asserts/imagens/imagem-01.jpeg"
import imagem_02 from "../../asserts/imagens/imagem-02.jpeg"
import imagem_03 from "../../asserts/imagens/imagem-03.jpeg"
import { FaBars, FaTimes } from "react-icons/fa";





const Portfolio = () => {
    const images = [imagem_02, imagem_01, imagem_03];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="portfolio-container">
            {/* Cabeçalho com informações de contato e redes sociais */}
            <header className="top-header">
                <div className="contact-info">
                    <p><HiOutlinePhone className="icon" />
                        (11) 99999-9999</p>
                    <p>|</p>
                    <p><BsEnvelopeAt className="icon" /> contato@blogueiro.com</p>
                </div>
                <div className="social-icons">
                    <a href="https://instagram.com"><FaInstagram className="icon-social" /></a>
                    <a href="https://instagram.com"><FaYoutube className="icon-social" /></a>
                    <a href="https://instagram.com"><FaTiktok className="icon-social" /></a>
                    <a href="https://instagram.com"><FaGlobe className="icon-social" /></a>
                </div>
            </header>

            {/* Menu de navegação */}
            <nav className={`menu ${isSticky ? "sticky" : ""}`}>
                {!isSidebarOpen && (
                    <div className="menu-toggle" onClick={toggleSidebar}>
                        <FaBars className="icon" />
                    </div>
                )}
                <ul className={`menu-list ${isSidebarOpen ? "open" : ""}`}>
                    {/* Botão de fechar no topo da sidebar */}
                    <div className="close-button" onClick={toggleSidebar}>
                        <FaTimes className="icon-close" />
                    </div>
                    <li><a href="https://instagram.com">Home</a></li>
                    <li><a href="https://instagram.com">Sobre</a></li>
                    <li><a href="https://instagram.com">Serviços</a></li>
                    <li><a href="https://instagram.com">Contato</a></li>
                </ul>
            </nav>

            {/* Seção de Capa */}
            <section className="portfolio-header">
                <div className="header-text">
                    <h1>PORTFÓLIO APRESENTAÇÃO</h1>
                    <h2>Wilkson Freitas</h2>
                    <h4>Transformamos conexões em experiências inesquecíveis ao unir autenticidade e criatividade para inspirar, engajar e construir juntos algo extraordinário!</h4>
                </div>
                <div className="header-images">
                    <div className="image-header">
                        <img src={imagem_01} alt="" />
                    </div>
                </div>
            </section>
            {/* Seção de Sobre mim */}
            <section className="portfolio-abaut" style={{ marginTop: '5px' }}>
                <div className="abaut-text">
                    <h1 id="abaut-text-h1-01" style={{ color: '#ffffff' }}>Quem</h1>
                    <h1 id="abaut-text-h1-02">sou eu?</h1>
                    <p style={{ marginTop: '120px' }}><strong>Sou Wilkson Freitas</strong>, Gerente de Operações e criador de conteúdo
                        apaixonado por conectar marcas e pessoas de forma genuína e criativa. Há
                        seis meses, dei um novo passo na minha jornada profissional, ingressando
                        no universo de <strong>digital influencer</strong>. Essa nova fase começou após ouvir
                        constantemente de amigos que eu tinha talento natural para a mídia.</p>
                    <p>Com foco em <strong>dicas e inspiração</strong>, crio conteúdos que vão além de divulgar
                        produtos: busco engajar, contar histórias e construir conexões reais com
                        minha audiência. Cada post, reels ou parceria reflete meu compromisso com
                        <strong>qualidade, autenticidade</strong> e cuidado com os detalhes.</p>
                    <p>Meus seguidores, carinhosamente chamados de <strong>WilkLovers</strong>, são parte
                        essencial da minha caminhada. Através de colaborações com marcas como
                        <strong>Brasil Cacau, MilkyMoo e Container Baby Kids</strong>, procuro alinhar valores e
                        entregar resultados que realmente façam a diferença.</p>
                    <p>Convido você a conhecer mais sobre meu trabalho e descobrir como
                        podemos construir algo incrível juntos!</p>
                </div>
                <div className="abaut-images">
                    <div className="abaut-image-carousel">
                        <img src={images[currentImageIndex]} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
