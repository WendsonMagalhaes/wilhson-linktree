import React from "react";
import "./InstagramVideoFrame.css"; // Importa o arquivo CSS
import { FaUsers, FaHeart, FaComment, FaCamera, FaEye, FaMapMarkerAlt, FaUserClock } from "react-icons/fa";

const InstagramVideoFrame = ({ url, views, likes, interactions }) => {
    return (
        <div className="instagram-container">
            {/* Moldura para o vídeo */}
            <div className="instagram-frame">
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                ></blockquote>
            </div>

            {/* Informações abaixo do vídeo */}
            <div className="instagram-stats">
                <p> <FaEye className="intagram-stats-icon" /> <strong> {views}</strong> Visualizações</p>
                <p><FaHeart className="intagram-stats-icon" /> <strong> {likes}</strong> Curtidas</p>
                <p><FaComment className="intagram-stats-icon" /> <strong> {interactions}</strong> Interações</p>
            </div>
        </div>
    );
};

export default InstagramVideoFrame;
