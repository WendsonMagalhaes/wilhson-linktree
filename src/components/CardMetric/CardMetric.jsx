import React, { useState, useEffect, useRef } from "react";
import "./CardMetric.css";

const CardMetrics = ({ metric }) => {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null); // Referência para o elemento do card
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade

    const formatNumber = (num) => {
        const parsedNum = parseFloat(num);
        if (isNaN(parsedNum)) return 'Valor inválido';

        let formattedNum;
        if (parsedNum >= 1000000) {
            formattedNum = (parsedNum / 1000000).toFixed(2).replace('.', ',');
            formattedNum = formattedNum.replace(/,00$/, '').replace(/0$/, '');
            return formattedNum + ' mi';
        } else if (parsedNum >= 1000) {
            formattedNum = (parsedNum / 1000).toFixed(2).replace('.', ',');
            formattedNum = formattedNum.replace(/,00$/, '').replace(/0$/, '');
            return formattedNum + ' mil';
        } else {
            formattedNum = parsedNum.toFixed(2).replace('.', ',');
            formattedNum = formattedNum.replace(/,00$/, '').replace(/0$/, '');
            return formattedNum;
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Ativa quando 50% do card estiver visível
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let startValue = 0;
            const duration = 2000;
            const increment = metric.value / (duration / 100);
            const counter = setInterval(() => {
                startValue += increment;
                setCount(Math.round(startValue));
                if (startValue >= metric.value) {
                    clearInterval(counter);
                    setCount(metric.value);
                }
            }, 100);

            return () => clearInterval(counter);
        }
    }, [isVisible, metric.value]);

    return (
        <div className="metric-card" ref={cardRef}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-value">{formatNumber(count)}</div>
            <div className="metric-label">{metric.label}</div>
        </div>
    );
};

export default CardMetrics;
