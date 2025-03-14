import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { BsEnvelopeAt } from "react-icons/bs";
import imagem_01 from "../../assets/imagens/imagem-01.webp"
import imagem_02 from "../../assets/imagens/imagem-02.jpeg"
import imagem_03 from "../../assets/imagens/imagem-03.jpeg"
import imagem_04 from "../../assets/imagens/imagem-04.jpeg"
import frame_phone from "../../assets/imagens/frame-phone.png"
import slider_image_01 from '../../assets/imagens/slider-image-01.jpeg'
import slider_image_02 from '../../assets/imagens/slider-image-02.jpeg'
import slider_image_03 from '../../assets/imagens/slider-image-03.jpeg'
import slider_image_04 from '../../assets/imagens/slider-image-04.jpeg'
import slider_image_05 from '../../assets/imagens/slider-image-05.jpeg'
import slider_image_06 from '../../assets/imagens/slider-image-06.jpeg'

import logo_cacau_brasil from "../../assets/imagens/logo-cacau-brasil.png"
import logo_container_baby_kids from "../../assets/imagens/logo-container-baby-kids.jpeg"
import logo_milkymoo from "../../assets/imagens/logo-milkymoo.png"
import logo_sel_fit from "../../assets/imagens/logo-sel-fit.png"
import background_01 from "../../assets/imagens/backgroun-01.png"
import SliderImage from "../../components/SliderImage/SliderImage";



import { FaBars, FaTimes } from "react-icons/fa";
import Card from "../../components/Card/Card";
import { FaUsers, FaHeart, FaComment, FaCamera } from "react-icons/fa";
import { FaEye, FaMapMarkerAlt, FaUserClock } from "react-icons/fa";
import CardMetric from "../../components/CardMetric/CardMetric";
import FlipCard from "../../components/FlipCard/FlipCard";
import InstagramVideoFrame from "../../components/InstagramVideoFrame/InstagramVideoFrame";








const Portfolio = () => {
    const images = [imagem_02, imagem_01, imagem_03];
    const sliderImage = [slider_image_01, slider_image_02, slider_image_03, slider_image_04, slider_image_05, slider_image_06]
    // Lista de imagens
    const imagens = [
        require("../../assets/imagens/imagem-01.webp"),
        require("../../assets/imagens/imagem-02.jpeg"),
        require("../../assets/imagens/imagem-03.jpeg"),
        require("../../assets/imagens/imagem-04.jpeg"),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [views, setViews] = useState(null);

    const metrics = [
        { id: 1, icon: <FaUsers />, label: "Seguidores", value: 6977 },
        { id: 2, icon: <FaHeart />, label: "Curtidas", value: 80000 },
        { id: 3, icon: <FaComment />, label: "Comentários", value: 4500 },
        { id: 4, icon: <FaCamera />, label: "Postagens", value: 463 },
    ];


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Enviar email
        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert("Email enviado com sucesso!");
            } else {
                alert("Erro ao enviar o email.");
            }
        } catch (error) {
            alert("Erro ao enviar o email.");
        }
    };
    useEffect(() => {
        // Carregar o script do Instagram para exibir o vídeo corretamente
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
            window.instgrm.Embeds.process(); // Processa os embeds após o carregamento
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);



    return (
        <div className="portfolio-container">
            {/* Cabeçalho com informações de contato e redes sociais */}
            <header className="top-header">
                <div className="contact-info">
                    <p><HiOutlinePhone className="icon" />
                        (83) 99672-4214</p>
                    <p>|</p>
                    <p><BsEnvelopeAt className="icon" /> wilkpublicidade@gmail.com</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.instagram.com/wilksonfreitas?igsh=aDFxaGd4MGt1ODVp&utm_source=qr" target="_blank"
                        rel="noopener noreferrer"><FaInstagram className="icon-social" /></a>
                    <a href="https://www.tiktok.com/@wilksonfreitasoficial?_t=ZM-8u5Lu40tU9O&_r=1" target="_blank"
                        rel="noopener noreferrer"><FaTiktok className="icon-social" /></a>
                    <a href="https://wilkson-freitas.vercel.app/" target="_blank"
                        rel="noopener noreferrer"><FaGlobe className="icon-social" /></a>
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
                    <li><a href="https://instagram.com">Quem sou eu?</a></li>
                    <li><a href="https://instagram.com">Alguns Trabalhos</a></li>
                    <li><a href="https://instagram.com">Metricas/Rede Social</a></li>
                    <li><a href="https://instagram.com">Contatos</a></li>


                </ul>
            </nav>

            {/* Seção de Capa */}
            <section className="portfolio-header">
                <div className="header-text">
                    <img className="imagem-background" src={background_01} alt=""></img>
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
                    <SliderImage images={sliderImage} />;

                </div>
            </section>

            {/* Seção de Trabalhos */}
            <section className="portfolio-projects">
                <h1 className="section-title">ALGUNS TRABALHOS</h1>
                <p className="section-sub-title" >Estes são alguns dos trabalhos que prestei.</p>
                <div className="projects-container">
                    <div className="projects-grid">


                        <FlipCard
                            images={logo_sel_fit}
                            title="Sel Fit"
                            description="Parceria incrível como Embaixador da Sel Fit."
                            isVertical={true} />

                        <FlipCard
                            images={logo_cacau_brasil}
                            title="Brasil Cacau"
                            description="Campanha especial para a marca Brasil Cacau."
                            isVertical={true} />

                        <FlipCard
                            images={logo_milkymoo}
                            title="MilkyMoo"
                            description="Colaboração com a MilkyMoo para engajar a audiência."
                            isVertical={true} />
                        <FlipCard
                            images={logo_container_baby_kids}
                            title="Container Baby Kids"
                            description="Parceria incrível com a Container Baby Kids."
                            isVertical={true} />


                    </div>
                </div>
            </section>
            {/*Seção Metricas */}
            <section className="social-stats-container">
                <h2 className="section-title">REDES SOCIAL</h2>
                <p className="section-sub-title">Visão geral das interações e engajamento</p>
                <div className="metrics-container">
                    {metrics.map((metric) => (
                        <CardMetric key={metric.id} metric={metric} />
                    ))}

                </div>
                <div className="stats-container">

                    <div className="stats-card">
                        <div className="stat-item">
                            <FaEye className="stat-icon" />
                            <p>
                                <strong>+458 Mil</strong> Visualizações no mês
                            </p>
                        </div>
                        <div className="stat-item">
                            <FaMapMarkerAlt className="stat-icon" />
                            <p>
                                <strong>Público:</strong> Campina Grande, João Pessoa, Recife, São Paulo
                            </p>
                        </div>
                        <div className="stat-item">
                            <FaUserClock className="stat-icon" />
                            <p className="stat-item-title">
                                <strong>Faixa etária:</strong>

                            </p>
                            <p className="stat-item-values">
                                <br /> 25 a 34 - 43,4%
                                <br /> 35 a 44 - 34,7%
                            </p>
                        </div>
                    </div>
                    {/* Segunda parte - Mosaico de Imagens */}
                    <div className="image-mosaic">
                        <div className="large-image">
                            <img src={frame_phone} alt="Imagem grande" />
                        </div>
                        <div className="small-videos">
                            <div className="small-video"> <InstagramVideoFrame
                                url="https://www.instagram.com/reel/DA7CoOcPSlJ/"
                                views="120K"
                                likes="8.5K"
                                interactions="3.2K"
                            /></div>
                            <div className="small-video"> <InstagramVideoFrame
                                url="https://www.instagram.com/reel/DA7CoOcPSlJ/"
                                views="120K"
                                likes="8.5K"
                                interactions="3.2K"
                            /></div>
                            <div className="small-video"> <InstagramVideoFrame
                                url="https://www.instagram.com/reel/DA7CoOcPSlJ/"
                                views="120K"
                                likes="8.5K"
                                interactions="3.2K"
                            /></div>
                            <div className="small-video"> <InstagramVideoFrame
                                url="https://www.instagram.com/reel/DA7CoOcPSlJ/"
                                views="120K"
                                likes="8.5K"
                                interactions="3.2K"
                            /></div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="thank-you-section">
                <div className="thank-you-content">
                    <div className="thank-you-message">
                        <h2 className="thank-you-message-title-01">...</h2>
                        <h2 className="thank-you-message-title-02">MUITO
                            OBRIGADO!</h2>
                        <h2 className="thank-you-message-title-03">...</h2>
                    </div>
                    <div className="thank-you-image">
                        <img src={imagem_04} alt="Agradecimento" />
                    </div>
                </div>
                <div className="thank-you-content-forms">

                    <div className="email-form">

                        <h3>Entre em contato e faça um orçamento sem compromisso</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nome:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Enviar E-mail</button>
                            <a href="https://instagram.com"><FaWhatsapp className="icon-contato" /></a>

                        </form>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Portfolio;
