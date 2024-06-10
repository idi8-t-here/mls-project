import React from 'react';

const ViewCharts = () => {
    return (
        <div>
            <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={640}
  height={480}
  src="https://charts.mongodb.com/charts-project-0-wqqmmiw/embed/charts?id=663bb622-181a-49b3-8a37-c8035adf04af&maxDataAge=3600&theme=light&autoRefresh=true"
/>

        </div>
    );
}

export default ViewCharts;
