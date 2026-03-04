const resorts = [
  {
    id: "steamboat",
    name: "Steamboat",
    state: "CO",
    driveHours: 3.4,
    airportTransferHours: 4.2,
    liftTicket: 239,
    lodgingNight: 260,
    townDailyCost: 92,
    baseSnowIn: 66,
    newSnow7dIn: 18,
    windRisk: 0.34,
    crowdIndex: 0.52,
    eventLoad: 0.45,
    terrainFit: { beginner: 0.82, intermediate: 0.88, advanced: 0.7, powder: 0.9, park: 0.56, family: 0.86, budget: 0.52, "all-mountain": 0.85 },
    forecast: [
      { day: "Thu", snowIn: 5, highF: 25, lowF: 16, windMph: 16, visibility: "Moderate", rainLineFt: 6400 },
      { day: "Fri", snowIn: 8, highF: 23, lowF: 13, windMph: 12, visibility: "Good", rainLineFt: 6100 },
      { day: "Sat", snowIn: 4, highF: 27, lowF: 17, windMph: 18, visibility: "Moderate", rainLineFt: 6800 },
      { day: "Sun", snowIn: 1, highF: 31, lowF: 19, windMph: 10, visibility: "Good", rainLineFt: 7600 }
    ]
  },
  {
    id: "park-city",
    name: "Park City",
    state: "UT",
    driveHours: 8.5,
    airportTransferHours: 0.9,
    liftTicket: 265,
    lodgingNight: 340,
    townDailyCost: 108,
    baseSnowIn: 54,
    newSnow7dIn: 9,
    windRisk: 0.22,
    crowdIndex: 0.66,
    eventLoad: 0.62,
    terrainFit: { beginner: 0.9, intermediate: 0.86, advanced: 0.73, powder: 0.58, park: 0.84, family: 0.9, budget: 0.35, "all-mountain": 0.82 },
    forecast: [
      { day: "Thu", snowIn: 1, highF: 32, lowF: 22, windMph: 9, visibility: "Good", rainLineFt: 7800 },
      { day: "Fri", snowIn: 3, highF: 30, lowF: 20, windMph: 11, visibility: "Good", rainLineFt: 7400 },
      { day: "Sat", snowIn: 2, highF: 35, lowF: 24, windMph: 14, visibility: "Moderate", rainLineFt: 8200 },
      { day: "Sun", snowIn: 0, highF: 37, lowF: 25, windMph: 8, visibility: "Great", rainLineFt: 8600 }
    ]
  },
  {
    id: "copper",
    name: "Copper Mountain",
    state: "CO",
    driveHours: 1.8,
    airportTransferHours: 2.3,
    liftTicket: 199,
    lodgingNight: 220,
    townDailyCost: 85,
    baseSnowIn: 60,
    newSnow7dIn: 14,
    windRisk: 0.28,
    crowdIndex: 0.58,
    eventLoad: 0.4,
    terrainFit: { beginner: 0.72, intermediate: 0.9, advanced: 0.82, powder: 0.71, park: 0.88, family: 0.69, budget: 0.71, "all-mountain": 0.87 },
    forecast: [
      { day: "Thu", snowIn: 3, highF: 26, lowF: 14, windMph: 12, visibility: "Good", rainLineFt: 7000 },
      { day: "Fri", snowIn: 6, highF: 24, lowF: 10, windMph: 17, visibility: "Moderate", rainLineFt: 6700 },
      { day: "Sat", snowIn: 4, highF: 28, lowF: 15, windMph: 21, visibility: "Variable", rainLineFt: 7200 },
      { day: "Sun", snowIn: 1, highF: 33, lowF: 19, windMph: 13, visibility: "Good", rainLineFt: 7900 }
    ]
  },
  {
    id: "jhole",
    name: "Jackson Hole",
    state: "WY",
    driveHours: 8.8,
    airportTransferHours: 0.5,
    liftTicket: 279,
    lodgingNight: 365,
    townDailyCost: 115,
    baseSnowIn: 84,
    newSnow7dIn: 21,
    windRisk: 0.39,
    crowdIndex: 0.49,
    eventLoad: 0.37,
    terrainFit: { beginner: 0.46, intermediate: 0.74, advanced: 0.95, powder: 0.94, park: 0.42, family: 0.44, budget: 0.3, "all-mountain": 0.8 },
    forecast: [
      { day: "Thu", snowIn: 7, highF: 21, lowF: 9, windMph: 20, visibility: "Variable", rainLineFt: 5700 },
      { day: "Fri", snowIn: 9, highF: 19, lowF: 8, windMph: 23, visibility: "Low", rainLineFt: 5400 },
      { day: "Sat", snowIn: 5, highF: 24, lowF: 12, windMph: 18, visibility: "Moderate", rainLineFt: 6100 },
      { day: "Sun", snowIn: 2, highF: 28, lowF: 15, windMph: 12, visibility: "Good", rainLineFt: 7000 }
    ]
  },
  {
    id: "sun-valley",
    name: "Sun Valley",
    state: "ID",
    driveHours: 10.2,
    airportTransferHours: 0.4,
    liftTicket: 215,
    lodgingNight: 245,
    townDailyCost: 88,
    baseSnowIn: 46,
    newSnow7dIn: 7,
    windRisk: 0.2,
    crowdIndex: 0.37,
    eventLoad: 0.28,
    terrainFit: { beginner: 0.8, intermediate: 0.88, advanced: 0.78, powder: 0.42, park: 0.57, family: 0.83, budget: 0.64, "all-mountain": 0.79 },
    forecast: [
      { day: "Thu", snowIn: 1, highF: 30, lowF: 18, windMph: 8, visibility: "Great", rainLineFt: 7900 },
      { day: "Fri", snowIn: 2, highF: 29, lowF: 17, windMph: 9, visibility: "Great", rainLineFt: 7600 },
      { day: "Sat", snowIn: 2, highF: 31, lowF: 19, windMph: 11, visibility: "Good", rainLineFt: 8000 },
      { day: "Sun", snowIn: 0, highF: 35, lowF: 23, windMph: 10, visibility: "Great", rainLineFt: 8700 }
    ]
  }
];

const apiBaseFromQuery = new URLSearchParams(window.location.search).get("apiBase");
if (apiBaseFromQuery) {
  localStorage.setItem("summitsync_api_base", apiBaseFromQuery);
}
const API_BASE =
  apiBaseFromQuery || window.SUMMITSYNC_API_BASE || localStorage.getItem("summitsync_api_base") || "";

const form = document.getElementById("tripForm");
const budgetInput = document.getElementById("budgetInput");
const nightsInput = document.getElementById("nightsInput");
const groupSizeInput = document.getElementById("groupSizeInput");
const travelModeSelect = document.getElementById("travelModeSelect");
const styleSelect = document.getElementById("styleSelect");
const skillSelect = document.getElementById("skillSelect");
const resultsList = document.getElementById("resultsList");
const summaryText = document.getElementById("summaryText");
const forecastPanel = document.getElementById("forecastPanel");
const forecastIntro = document.getElementById("forecastIntro");

function bookingLinksForResort(resort) {
  const destination = encodeURIComponent(`${resort.name} ${resort.state}`);
  const searchQuery = encodeURIComponent(`${resort.name} lift tickets`);

  return {
    lodging: `https://www.google.com/travel/hotels/${destination}`,
    flights: "https://www.google.com/travel/flights",
    liftTickets: `https://www.google.com/search?q=${searchQuery}`
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round(value, decimals = 0) {
  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
}

function normalizeCost(value, min, max) {
  if (max === min) return 1;
  return 1 - (value - min) / (max - min);
}

function estimateTravelCost(resort, travelMode, groupSize) {
  const gasAndWearPerHour = 38;
  const driveCost = resort.driveHours * 2 * gasAndWearPerHour;
  const flightBasePerPerson = 285;
  const flightTransferPerPerson = resort.airportTransferHours * 18;
  const flyCost = groupSize * (flightBasePerPerson + flightTransferPerPerson);

  if (travelMode === "drive") {
    return { mode: "Drive", cost: driveCost, friction: clamp(resort.driveHours / 10, 0, 1) };
  }

  if (travelMode === "fly") {
    return {
      mode: "Fly",
      cost: flyCost,
      friction: clamp((resort.airportTransferHours + 2.5) / 8, 0, 1)
    };
  }

  if (driveCost <= flyCost) {
    return { mode: "Drive", cost: driveCost, friction: clamp(resort.driveHours / 10, 0, 1) };
  }

  return {
    mode: "Fly",
    cost: flyCost,
    friction: clamp((resort.airportTransferHours + 2.5) / 8, 0, 1)
  };
}

function weatherPatternMetrics(resort) {
  const stormTotal = resort.forecast.reduce((sum, day) => sum + day.snowIn, 0);
  const avgWind = resort.forecast.reduce((sum, day) => sum + day.windMph, 0) / resort.forecast.length;
  const avgHigh = resort.forecast.reduce((sum, day) => sum + day.highF, 0) / resort.forecast.length;
  const rainRiskDays = resort.forecast.filter((day) => day.rainLineFt > 7800).length;
  const bestDay = resort.forecast.reduce((best, day) => {
    const dayScore = day.snowIn * 2.4 - day.windMph * 0.35 - Math.max(day.highF - 33, 0);
    return dayScore > best.score ? { day: day.day, score: dayScore } : best;
  }, { day: "N/A", score: -999 });

  return {
    stormTotal,
    avgWind,
    avgHigh,
    rainRiskDays,
    bestDay: bestDay.day
  };
}

function calculateTripOptions(filters) {
  const priced = resorts.map((resort) => {
    const travel = estimateTravelCost(resort, filters.travelMode, filters.groupSize);
    const liftCost = resort.liftTicket * filters.groupSize;
    const lodgingCost = resort.lodgingNight * filters.nights;
    const townCost = resort.townDailyCost * filters.groupSize * filters.nights;
    const totalCost = travel.cost + liftCost + lodgingCost + townCost;

    return { resort, travel, totalCost };
  });

  const minCost = Math.min(...priced.map((item) => item.totalCost));
  const maxCost = Math.max(...priced.map((item) => item.totalCost));

  return priced.map((item) => {
    const { resort, travel, totalCost } = item;
    const weather = weatherPatternMetrics(resort);

    const snowScore = clamp((resort.baseSnowIn * 0.5 + resort.newSnow7dIn * 2.2) / 120, 0, 1);
    const valueScore = clamp(normalizeCost(totalCost, minCost, maxCost), 0, 1);
    const budgetFit = clamp(filters.budget / totalCost, 0, 1);
    const travelPenalty = travel.friction;
    const weatherPenalty = clamp((weather.avgWind - 10) / 20, 0, 1) * 0.6 + (weather.rainRiskDays / 4) * 0.4;

    const styleFit = resort.terrainFit[filters.style] || resort.terrainFit["all-mountain"];
    const skillFit = resort.terrainFit[filters.skill] || 0.7;
    const preferenceFit = clamp((styleFit * 0.65 + skillFit * 0.35), 0, 1);

    const crowdPenalty = clamp(resort.crowdIndex * 0.7 + resort.eventLoad * 0.3, 0, 1);

    const score =
      snowScore * 27 +
      valueScore * 20 +
      budgetFit * 14 +
      preferenceFit * 24 -
      travelPenalty * 8 -
      crowdPenalty * 6 -
      weatherPenalty * 9;

    return {
      id: resort.id,
      resort,
      travel,
      weather,
      totalCost,
      perPerson: totalCost / filters.groupSize,
      score: round(clamp(score, 0, 100), 1),
      components: {
        snow: round(snowScore * 100),
        value: round(valueScore * 100),
        fit: round(preferenceFit * 100),
        travelRisk: round(travelPenalty * 100),
        crowdRisk: round(crowdPenalty * 100)
      }
    };
  }).sort((a, b) => b.score - a.score);
}

function reasonsFor(option, filters) {
  const reasons = [];

  if (option.weather.stormTotal >= 14) {
    reasons.push(`Strong storm cycle: ${option.weather.stormTotal}" forecast over 4 days.`);
  }

  if (option.components.value >= 70) {
    reasons.push("High value profile compared to other resorts this run.");
  }

  if (option.components.fit >= 80) {
    reasons.push(`Excellent match for ${filters.style} + ${filters.skill} preferences.`);
  }

  if (option.components.travelRisk <= 35) {
    reasons.push(`Low travel friction via ${option.travel.mode.toLowerCase()} route.`);
  }

  if (reasons.length === 0) {
    reasons.push("Balanced option with moderate cost and predictable ski conditions.");
  }

  return reasons.slice(0, 3);
}

function renderRankings(options, filters) {
  resultsList.innerHTML = "";
  summaryText.textContent = `${options.length} destinations ranked for a ${filters.nights}-night trip.`;

  options.forEach((option, index) => {
    const card = document.createElement("article");
    card.className = "result-card";
    const booking = bookingLinksForResort(option.resort);

    const reasons = reasonsFor(option, filters)
      .map((reason) => `<li>${reason}</li>`)
      .join("");

    card.innerHTML = `
      <div class="result-top">
        <div>
          <strong>#${index + 1} ${option.resort.name}, ${option.resort.state}</strong>
          <p class="muted">Travel: ${option.travel.mode} | Total est: $${round(option.totalCost)} ($${round(option.perPerson)} pp)</p>
        </div>
        <div class="score">${option.score}</div>
      </div>
      <div class="metric-row">
        <span class="metric">Snow ${option.components.snow}</span>
        <span class="metric">Value ${option.components.value}</span>
        <span class="metric">Fit ${option.components.fit}</span>
        <span class="metric">Travel risk ${option.components.travelRisk}</span>
        <span class="metric">Crowd risk ${option.components.crowdRisk}</span>
      </div>
      <ul class="reasons">${reasons}</ul>
      <div class="action-row">
        <button class="link-btn" data-id="${option.id}">View Weather Pattern Breakdown</button>
        <a class="book-btn" href="${booking.lodging}" target="_blank" rel="noopener noreferrer">Book Lodging</a>
        <a class="book-btn" href="${booking.flights}" target="_blank" rel="noopener noreferrer">Book Flights</a>
        <a class="book-btn" href="${booking.liftTickets}" target="_blank" rel="noopener noreferrer">Find Lift Tickets</a>
      </div>
    `;

    resultsList.appendChild(card);
  });
}

function renderForecast(option) {
  forecastIntro.textContent = `Forecast detail for ${option.resort.name}. Best ski window: ${option.weather.bestDay}.`;

  const freezeThaw = option.weather.avgHigh > 33 ? "Elevated" : "Low";
  const windRisk = option.weather.avgWind > 18 ? "High" : option.weather.avgWind > 12 ? "Moderate" : "Low";
  const stormQuality = option.weather.stormTotal > 16 ? "High" : option.weather.stormTotal > 8 ? "Moderate" : "Light";

  const tableRows = option.resort.forecast
    .map((day) => {
      const rainFlag = day.rainLineFt > 7800 ? "warn" : "good";
      return `
        <tr>
          <td>${day.day}</td>
          <td>${day.snowIn}"</td>
          <td>${day.highF}/${day.lowF}F</td>
          <td>${day.windMph} mph</td>
          <td>${day.visibility}</td>
          <td class="${rainFlag}">${day.rainLineFt} ft</td>
        </tr>
      `;
    })
    .join("");

  forecastPanel.innerHTML = `
    <div class="pattern-grid">
      <div class="pattern">
        <h3>Storm Cycle</h3>
        <p>${stormQuality} (${option.weather.stormTotal}" / 4 days)</p>
      </div>
      <div class="pattern">
        <h3>Wind / Lift Risk</h3>
        <p>${windRisk} (${round(option.weather.avgWind, 1)} mph avg)</p>
      </div>
      <div class="pattern">
        <h3>Freeze-Thaw Risk</h3>
        <p>${freezeThaw} (${round(option.weather.avgHigh, 1)}F avg high)</p>
      </div>
      <div class="pattern">
        <h3>Best Ski Window</h3>
        <p>${option.weather.bestDay} morning</p>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>New Snow</th>
            <th>Temp (F)</th>
            <th>Wind</th>
            <th>Visibility</th>
            <th>Rain-Snow Line</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

function currentFilters() {
  return {
    budget: Math.max(300, Number(budgetInput.value) || 1800),
    nights: clamp(Number(nightsInput.value) || 3, 1, 14),
    groupSize: clamp(Number(groupSizeInput.value) || 2, 1, 10),
    travelMode: travelModeSelect.value,
    style: styleSelect.value,
    skill: skillSelect.value
  };
}

function runPlanner() {
  const filters = currentFilters();
  rankTripOptions(filters)
    .then((options) => {
      renderRankings(options, filters);
      renderForecast(options[0]);

      resultsList.querySelectorAll(".link-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const selected = options.find((option) => option.id === btn.dataset.id);
          if (selected) {
            renderForecast(selected);
          }
        });
      });
    })
    .catch(() => {
      const options = calculateTripOptions(filters);
      renderRankings(options, filters);
      renderForecast(options[0]);

      resultsList.querySelectorAll(".link-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const selected = options.find((option) => option.id === btn.dataset.id);
          if (selected) {
            renderForecast(selected);
          }
        });
      });
    });
}

async function rankTripOptions(filters) {
  if (!API_BASE) {
    return calculateTripOptions(filters);
  }

  const response = await fetch(`${API_BASE}/api/trips/rank`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filters)
  });

  if (!response.ok) {
    throw new Error("Failed to rank options from API.");
  }

  const payload = await response.json();
  if (!payload.options || !Array.isArray(payload.options) || payload.options.length === 0) {
    throw new Error("Invalid API ranking payload.");
  }

  return payload.options;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runPlanner();
});

runPlanner();
