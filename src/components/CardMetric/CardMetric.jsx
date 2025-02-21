import React from "react";
import "./CardMetric.css";


const CardMetrics = ({ metric }) => {  // Alterado 'metrics' para 'metric'
    return (
        <div className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
        </div>
    );
};

export default CardMetrics;
