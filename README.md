# shrineilpatel-Steeldev.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Steel Pricing Dashboard</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  body {
    font-family: Arial, sans-serif;
    background: #f7f7f7;
    margin: 0;
    padding: 10px;
    text-align: center;
  }
  .card {
    background: white;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
  h2 { margin: 0; font-size: 20px; }
  #price { font-size: 28px; color: #0077b6; margin-top: 6px; }
  canvas { max-width: 100%; height: 300px; }
</style>
</head>
<body>
  <div class="card">
    <h2>Hot Rolled Coil Steel Price (Demo)</h2>
    <div id="price">Loading...</div>
  </div>

  <div class="card">
    <canvas id="steelChart"></canvas>
  </div>

<script>
async function fetchFRED() {
  const url = "https://api.stlouisfed.org/fred/series/observations?series_id=WPU101707&api_key=6f65ea25a80f02e9cf867e13d626d720&file_type=json";
  const response = await fetch(url);
  const data = await response.json();
  return data.observations.map(o => ({ date: o.date, value: parseFloat(o.value) }));
}

async function renderChart() {
  const data = await fetchFRED();
  const labels = data.map(d => d.date);
  const values = data.map(d => d.value);
  
  // Simulate a "current price" using last value * random variation
  const lastValue = values[values.length - 1];
  const livePrice = (lastValue * (0.95 + Math.random() * 0.1)).toFixed(2);
  document.getElementById("price").textContent = `$${livePrice}/ton`;

  const ctx = document.getElementById('steelChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: "FRED WPU101707 Index",
        data: values,
        borderColor: "#0077b6",
        backgroundColor: "rgba(0,119,182,0.1)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      scales: {
        x: { display: false },
        y: { beginAtZero: false }
      },
      plugins: {
        legend: { display: true },
      }
    }
  });
}

renderChart();
</script>
</body>
</html>
