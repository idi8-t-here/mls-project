import React, { useEffect } from 'react';

function EmbeddedChart({ baseUrl, chartId }) {
  useEffect(() => {
    const embedURL = `${baseUrl}/embed/charts?id=${chartId}`;
    const container = document.getElementById('chart-container');

    const embeddingOptions = {
      theme: 'light', // or 'dark'
      showAttribution: false
    };

    const sdk = new window.ChartsEmbedSDK({
      baseUrl: embedURL
    });

    const chart = sdk.createChart(container, embeddingOptions);

    return () => {
      chart.remove();
    };
  }, [baseUrl, chartId]);

  return (
    <div id="chart-container" style={{ width: '100%', height: '500px' }}>
      {/* Chart will be embedded here */}
    </div>
  );
}

export default EmbeddedChart;
