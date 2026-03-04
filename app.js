const seedResorts = [
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
    crowdIndex: 0.52,
    eventLoad: 0.45,
    terrainFit: {
      beginner: 0.82,
      intermediate: 0.88,
      advanced: 0.7,
      powder: 0.9,
      park: 0.56,
      family: 0.86,
      budget: 0.52,
      "all-mountain": 0.85
    },
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
    crowdIndex: 0.66,
    eventLoad: 0.62,
    terrainFit: {
      beginner: 0.9,
      intermediate: 0.86,
      advanced: 0.73,
      powder: 0.58,
      park: 0.84,
      family: 0.9,
      budget: 0.35,
      "all-mountain": 0.82
    },
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
    crowdIndex: 0.58,
    eventLoad: 0.4,
    terrainFit: {
      beginner: 0.72,
      intermediate: 0.9,
      advanced: 0.82,
      powder: 0.71,
      park: 0.88,
      family: 0.69,
      budget: 0.71,
      "all-mountain": 0.87
    },
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
    crowdIndex: 0.49,
    eventLoad: 0.37,
    terrainFit: {
      beginner: 0.46,
      intermediate: 0.74,
      advanced: 0.95,
      powder: 0.94,
      park: 0.42,
      family: 0.44,
      budget: 0.3,
      "all-mountain": 0.8
    },
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
    crowdIndex: 0.37,
    eventLoad: 0.28,
    terrainFit: {
      beginner: 0.8,
      intermediate: 0.88,
      advanced: 0.78,
      powder: 0.42,
      park: 0.57,
      family: 0.83,
      budget: 0.64,
      "all-mountain": 0.79
    },
    forecast: [
      { day: "Thu", snowIn: 1, highF: 30, lowF: 18, windMph: 8, visibility: "Great", rainLineFt: 7900 },
      { day: "Fri", snowIn: 2, highF: 29, lowF: 17, windMph: 9, visibility: "Great", rainLineFt: 7600 },
      { day: "Sat", snowIn: 2, highF: 31, lowF: 19, windMph: 11, visibility: "Good", rainLineFt: 8000 },
      { day: "Sun", snowIn: 0, highF: 35, lowF: 23, windMph: 10, visibility: "Great", rainLineFt: 8700 }
    ]
  }
];

const resortNameFirst = ["Alpine", "Silver", "Granite", "Crystal", "Summit", "Timber", "Pioneer", "White", "North", "Cascade", "Cedar", "Snow", "Blue", "Hidden", "Eagle", "Aspen", "Glacier", "Echo", "Pine", "Raven"];
const resortNameSecond = ["Ridge", "Basin", "Peak", "Valley", "Pass", "Grove", "Range", "Point", "Creek", "Meadows", "Butte", "Bluff", "Landing", "Fork", "Vista"];
const statePool = ["CO", "UT", "WY", "ID", "CA", "MT", "NM", "WA", "OR", "VT", "NH", "ME", "MI", "NY", "BC", "AB"];
const hotelWords = ["Lodge", "Suites", "Inn", "Residences", "Village Hotel", "Peak House", "Mountain Stay", "Basecamp"];
const GENERATED_RESORT_COUNT = 1200;

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
const catalogMeta = document.getElementById("catalogMeta");

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

function deterministicJitter(index, amplitude) {
  const raw = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  const fractional = raw - Math.floor(raw);
  return (fractional * 2 - 1) * amplitude;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildHotelIdeas(resortName, state, index) {
  return Array.from({ length: 3 }, (_, offset) => {
    const word = hotelWords[(index + offset) % hotelWords.length];
    const name = `${resortName} ${word}`;
    return {
      name,
      url: `https://www.google.com/travel/hotels/${encodeURIComponent(`${resortName} ${state}`)}?q=${encodeURIComponent(name)}`
    };
  });
}

function generateResortCatalog(seeds, targetCount) {
  const expanded = [];

  for (let i = 0; i < targetCount; i += 1) {
    const seed = seeds[i % seeds.length];
    const nameA = resortNameFirst[i % resortNameFirst.length];
    const nameB = resortNameSecond[Math.floor(i / resortNameFirst.length) % resortNameSecond.length];
    const state = statePool[i % statePool.length];
    const variantTag = Math.floor(i / seeds.length) + 1;
    const name = `${nameA} ${nameB} ${variantTag}`;

    const costJitter = deterministicJitter(i + 11, 34);
    const weatherJitter = deterministicJitter(i + 37, 6);
    const crowdJitter = deterministicJitter(i + 77, 0.15);

    const terrainFit = Object.fromEntries(
      Object.entries(seed.terrainFit).map(([key, value], idx) => [
        key,
        clamp(value + deterministicJitter(i * (idx + 1) + idx, 0.08), 0.2, 0.98)
      ])
    );

    const forecast = seed.forecast.map((day, dayIndex) => ({
      day: day.day,
      snowIn: round(clamp(day.snowIn + deterministicJitter(i + dayIndex * 5, 3), 0, 18), 1),
      highF: round(clamp(day.highF + deterministicJitter(i + dayIndex * 9, 5), 5, 44)),
      lowF: round(clamp(day.lowF + deterministicJitter(i + dayIndex * 7, 5), -5, 34)),
      windMph: round(clamp(day.windMph + deterministicJitter(i + dayIndex * 3, 5), 4, 35)),
      visibility: day.visibility,
      rainLineFt: round(clamp(day.rainLineFt + deterministicJitter(i + dayIndex * 13, 700), 4500, 9400))
    }));

    expanded.push({
      ...seed,
      id: `${slugify(name)}-${state.toLowerCase()}`,
      name,
      state,
      driveHours: round(clamp(seed.driveHours + deterministicJitter(i + 21, 4.2), 0.8, 14), 1),
      airportTransferHours: round(clamp(seed.airportTransferHours + deterministicJitter(i + 29, 1.4), 0.2, 6), 1),
      liftTicket: round(clamp(seed.liftTicket + costJitter, 95, 420)),
      lodgingNight: round(clamp(seed.lodgingNight + costJitter * 1.5, 110, 620)),
      townDailyCost: round(clamp(seed.townDailyCost + costJitter * 0.6, 45, 220)),
      baseSnowIn: round(clamp(seed.baseSnowIn + weatherJitter * 2, 25, 180)),
      newSnow7dIn: round(clamp(seed.newSnow7dIn + weatherJitter, 0, 44)),
      crowdIndex: clamp(seed.crowdIndex + crowdJitter, 0.12, 0.92),
      eventLoad: clamp(seed.eventLoad + deterministicJitter(i + 99, 0.16), 0.1, 0.9),
      terrainFit,
      forecast,
      hotelIdeas: buildHotelIdeas(name, state, i)
    });
  }

  return expanded;
}

function bookingLinksForResort(resort) {
  const destination = encodeURIComponent(`${resort.name} ${resort.state}`);
  const searchQuery = encodeURIComponent(`${resort.name} lift tickets`);

  return {
    lodging: `https://www.google.com/travel/hotels/${destination}`,
    flights: "https://www.google.com/travel/flights",
    liftTickets: `https://www.google.com/search?q=${searchQuery}`
  };
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
  const bestDay = resort.forecast.reduce(
    (best, day) => {
      const dayScore = day.snowIn * 2.4 - day.windMph * 0.35 - Math.max(day.highF - 33, 0);
      return dayScore > best.score ? { day: day.day, score: dayScore } : best;
    },
    { day: "N/A", score: -999 }
  );

  return {
    stormTotal,
    avgWind,
    avgHigh,
    rainRiskDays,
    bestDay: bestDay.day
  };
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

function passesHardFilters(resort, travel, totalCost, filters) {
  const maxBudget = filters.budget * 1.25;
  if (totalCost > maxBudget) return false;

  if (filters.travelMode === "drive" && resort.driveHours > 12) return false;
  if (filters.travelMode === "fly" && resort.airportTransferHours > 5.5) return false;

  if (filters.style === "powder" && resort.terrainFit.powder < 0.55) return false;
  if (filters.style === "park" && resort.terrainFit.park < 0.55) return false;
  if (filters.style === "family" && resort.terrainFit.family < 0.55) return false;
  if (filters.skill === "advanced" && resort.terrainFit.advanced < 0.45) return false;

  if (travel.mode === "Drive" && filters.nights <= 2 && resort.driveHours > 9) return false;

  return true;
}

function calculateTripOptions(filters, resortsCatalog) {
  const priced = resortsCatalog
    .map((resort) => {
      const travel = estimateTravelCost(resort, filters.travelMode, filters.groupSize);
      const liftCost = resort.liftTicket * filters.groupSize;
      const lodgingCost = resort.lodgingNight * filters.nights;
      const townCost = resort.townDailyCost * filters.groupSize * filters.nights;
      const totalCost = travel.cost + liftCost + lodgingCost + townCost;

      return { resort, travel, totalCost };
    })
    .filter((item) => passesHardFilters(item.resort, item.travel, item.totalCost, filters));

  const source = priced.length > 0 ? priced : resortsCatalog.map((resort) => {
    const travel = estimateTravelCost(resort, filters.travelMode, filters.groupSize);
    const liftCost = resort.liftTicket * filters.groupSize;
    const lodgingCost = resort.lodgingNight * filters.nights;
    const townCost = resort.townDailyCost * filters.groupSize * filters.nights;
    return { resort, travel, totalCost: travel.cost + liftCost + lodgingCost + townCost };
  });

  const minCost = Math.min(...source.map((item) => item.totalCost));
  const maxCost = Math.max(...source.map((item) => item.totalCost));

  return source
    .map((item) => {
      const { resort, travel, totalCost } = item;
      const weather = weatherPatternMetrics(resort);

      const snowScore = clamp((resort.baseSnowIn * 0.5 + resort.newSnow7dIn * 2.2) / 120, 0, 1);
      const valueScore = clamp(normalizeCost(totalCost, minCost, maxCost), 0, 1);
      const budgetFit = clamp(filters.budget / totalCost, 0, 1);
      const travelPenalty = travel.friction;
      const weatherPenalty = clamp((weather.avgWind - 10) / 20, 0, 1) * 0.6 + (weather.rainRiskDays / 4) * 0.4;

      const styleFit = resort.terrainFit[filters.style] || resort.terrainFit["all-mountain"];
      const skillFit = resort.terrainFit[filters.skill] || 0.7;
      const preferenceFit = clamp(styleFit * 0.65 + skillFit * 0.35, 0, 1);
      const crowdPenalty = clamp(resort.crowdIndex * 0.7 + resort.eventLoad * 0.3, 0, 1);

      const score =
        snowScore * 30 +
        valueScore * 15 +
        budgetFit * 12 +
        preferenceFit * 26 -
        travelPenalty * 7 -
        crowdPenalty * 5 -
        weatherPenalty * 11;

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
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 25);
}

function reasonsFor(option, filters) {
  const reasons = [];

  if (option.weather.stormTotal >= 14) {
    reasons.push(`Strong storm cycle: ${round(option.weather.stormTotal, 1)}" over 4 days.`);
  }

  if (option.components.value >= 65) {
    reasons.push("Strong cost profile versus other matching resorts.");
  }

  if (option.components.fit >= 80) {
    reasons.push(`Excellent fit for ${filters.style} and ${filters.skill}.`);
  }

  if (option.components.travelRisk <= 35) {
    reasons.push(`Low travel friction via ${option.travel.mode.toLowerCase()} route.`);
  }

  if (reasons.length === 0) {
    reasons.push("Balanced pick with moderate costs and stable conditions.");
  }

  return reasons.slice(0, 3);
}

function renderRankings(options, filters, catalogSize) {
  resultsList.innerHTML = "";
  summaryText.textContent = `${options.length} top matches from ${catalogSize.toLocaleString()} resort options.`;

  options.forEach((option, index) => {
    const card = document.createElement("article");
    card.className = "result-card";
    const booking = bookingLinksForResort(option.resort);

    const reasons = reasonsFor(option, filters)
      .map((reason) => `<li>${reason}</li>`)
      .join("");

    const hotelIdeas = (option.resort.hotelIdeas || [])
      .slice(0, 3)
      .map((hotel) => `<a class="hotel-chip" href="${hotel.url}" target="_blank" rel="noopener noreferrer">${hotel.name}</a>`)
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
      <div class="hotel-row">${hotelIdeas}</div>
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
        <p>${stormQuality} (${round(option.weather.stormTotal, 1)}" / 4 days)</p>
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

async function rankTripOptions(filters, fallbackCatalog) {
  if (!API_BASE) {
    return calculateTripOptions(filters, fallbackCatalog);
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

function attachForecastButtons(options) {
  resultsList.querySelectorAll(".link-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = options.find((option) => option.id === button.dataset.id);
      if (selected) {
        renderForecast(selected);
      }
    });
  });
}

function runPlanner(catalog) {
  const filters = currentFilters();

  rankTripOptions(filters, catalog)
    .then((options) => {
      renderRankings(options, filters, catalog.length);
      renderForecast(options[0]);
      attachForecastButtons(options);
    })
    .catch(() => {
      const options = calculateTripOptions(filters, catalog);
      renderRankings(options, filters, catalog.length);
      renderForecast(options[0]);
      attachForecastButtons(options);
    });
}

const localCatalog = generateResortCatalog(seedResorts, GENERATED_RESORT_COUNT);
if (catalogMeta) {
  catalogMeta.textContent = `${localCatalog.length.toLocaleString()} resorts + hotel ideas loaded for exploration.`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runPlanner(localCatalog);
});

runPlanner(localCatalog);
