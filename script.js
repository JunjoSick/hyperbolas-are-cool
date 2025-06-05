// --- TRANSLATION DATA ---
const translations = {
  en: {
    title: "🌍 Seismic Epicenter Localization",
    subtitle:
      "Interactive demonstration of the hyperbola method for earthquake epicenter identification",
    resetBtn: "🔄 Reset Simulation",
    stationsLabel: "Stations",
    instructionInitial: "Click on the map to place seismic stations (max 3)",
    instructionPlaceStation: "Click on the map to place seismic station {num}",
    instructionAllPlaced: "All stations placed. Reset to start over.",
    toggleThirdHyperbolaShow: "Show 3rd Hyperbola (S2-S3)",
    toggleThirdHyperbolaHide: "Hide 3rd Hyperbola (S2-S3)",
    toggleHyperbolaLabels: "Show Hyperbola Station Labels",
    legendEpicenter: "True Epicenter / Intersection",
    legendStation: "Seismic Station",
    legendCircle: "Distance Circle",
    legendHyperbola: "Hyperbola",
    seismicDataTitle: "📊 Seismic Data",
    seismicDataNoData:
      "Place seismic stations on the map to begin localization and see data.",
    localizationProgressTitle: "🎯 Localization Progress",
    progressStep1Initial: "Place first station",
    progressStep2Initial: "Add second station",
    progressStep3Initial: "Triangulate with third station",
    progressStep1Done: "Create distance circle",
    progressStep2Done: "Draw first hyperbola",
    progressStep3Done: "Find hyperbola intersections",
    progressStep1Active: "Place first station",
    progressStep2Active: "Add second station for hyperbola",
    progressStep3Active: "Add third station to triangulate",
    interpretation1StationTitle: "🔍 Analysis (1 Station)",
    interpretation1StationP1:
      "S-P time: {timeDiff} s. Approx. distance: <strong>{radius} km</strong>.",
    interpretation1StationP2: "Defines a circle of possible locations.",
    interpretation2StationsTitle: "📈 Analysis (2 Stations)",
    interpretation2StationsP1: "A hyperbola is defined (red line).",
    interpretation2StationsP2:
      "Constant distance difference to S{s1id} & S{s2id}: <strong>{diff} km</strong>.",
    interpretation3StationsTitle: "🎯 Triangulation Complete! (3 Stations)",
    interpretation3StationsP1:
      "A second hyperbola (purple line) is added using S1 & S3.",
    interpretation3StationsP1WithThird:
      "Hyperbolas for S1-S2 (red), S1-S3 (purple), and S2-S3 (orange) are shown.",
    interpretation3StationsP2:
      "Their geometric intersection (marker) pinpoints the epicenter.",
    explanationTitle: "🧮 How the Hyperbola Method Works",
    explanationWaveDiffTitle: "1. Wave Speed Difference",
    explanationWaveDiffP1:
      "Earthquakes generate two main types of seismic waves:",
    explanationWaveDiffLi1:
      "<strong>P-waves</strong> (Primary): Faster, arrive first (~6-8 km/s)",
    explanationWaveDiffLi2:
      "<strong>S-waves</strong> (Secondary): Slower, arrive second (~3-4 km/s)",
    explanationTimeDistTitle: "2. Time-Distance Relationship (Single Station)",
    explanationTimeDistP1:
      "The time difference between P and S wave arrivals ( \\( \\text{t}_S - \\text{t}_P \\) ) at a station is proportional to the distance from the epicenter. This distance can be calculated using the P-wave velocity ( \\( \\text{v}_P \\) ) and S-wave velocity ( \\( \\text{v}_S \\) ):",
    explanationTimeDistP2:
      "With one station, this defines a circle of possible epicenter locations.",
    explanationHyperbolicTitle: "3. Hyperbolic Triangulation",
    explanationHyperbolicP1:
      "The hyperbola method uses the difference in arrival times of a specific seismic wave (e.g., P-wave, or the S-P difference itself) at pairs of stations.",
    explanationHyperbolicLi1:
      "<strong>1 station:</strong> (Using S-P time) Defines a circle of possible locations.",
    explanationHyperbolicLi2:
      "<strong>2 stations:</strong> The difference in arrival times of a wave at these two stations is constant for any point on a specific hyperbola. The stations act as foci. This defines one hyperbola.",
    explanationHyperbolicLi3:
      "<strong>3 stations:</strong> A third station allows the determination of a second, distinct hyperbola. The geometric intersection point of these two (or three) hyperbolas identifies the epicenter.",
    explanationRealWorldTitle: "4. Real-World Application",
    explanationRealWorldP1:
      "This method is fundamental to how seismological networks locate earthquakes. This simulation finds the <strong>epicenter</strong> (the point on the Earth's surface directly above the earthquake's origin). The actual 3D origin is called the <strong>hypocenter</strong>.",
    explanationRealWorldP2:
      "Real seismic data contains noise, and seismologists use many stations and advanced algorithms for precise, reliable locations. Visual intersections on maps can also be affected by map projection and drawing approximations.",
    stationLabel: "Station {id}",
    epicenterTooltip: "🎯 Epicenter (Hyperbola Intersection)",
    distanceCircleTooltip: "Distance circle: {radius} km",
    hyperbolaTooltip: "Hyperbola: Stations {s1id}-{s2id}",
    dataDistToTrueEpicenter: "Distance to true epicenter:",
    dataPWaveArrival: "P-wave arrival (true):",
    dataSWaveArrival: "S-wave arrival (true):",
    dataSPTimeDiff: "S-P time diff (true):",
  },
  it: {
    title: "🌍 Localizzazione Epicentro Sismico",
    subtitle:
      "Dimostrazione interattiva del metodo dell'iperbole per l'identificazione dell'epicentro di un terremoto",
    resetBtn: "🔄 Resetta Simulazione",
    stationsLabel: "Stazioni",
    instructionInitial:
      "Clicca sulla mappa per posizionare le stazioni sismiche (max 3)",
    instructionPlaceStation:
      "Clicca sulla mappa per posizionare la stazione sismica {num}",
    instructionAllPlaced:
      "Tutte le stazioni posizionate. Resetta per ricominciare.",
    toggleThirdHyperbolaShow: "Mostra 3ª Iperbole (S2-S3)",
    toggleThirdHyperbolaHide: "Nascondi 3ª Iperbole (S2-S3)",
    toggleHyperbolaLabels: "Mostra Etichette Stazioni Iperbole",
    legendEpicenter: "Epicentro Reale / Intersezione",
    legendStation: "Stazione Sismica",
    legendCircle: "Cerchio di Distanza",
    legendHyperbola: "Iperbole",
    seismicDataTitle: "📊 Dati Sismici",
    seismicDataNoData:
      "Posiziona le stazioni sismiche sulla mappa per iniziare la localizzazione e vedere i dati.",
    localizationProgressTitle: "🎯 Progresso Localizzazione",
    progressStep1Initial: "Posiziona la prima stazione",
    progressStep2Initial: "Aggiungi la seconda stazione",
    progressStep3Initial: "Triangola con la terza stazione",
    progressStep1Done: "Crea cerchio di distanza",
    progressStep2Done: "Disegna la prima iperbole",
    progressStep3Done: "Trova intersezioni iperboli",
    progressStep1Active: "Posiziona la prima stazione",
    progressStep2Active: "Aggiungi la seconda stazione per l'iperbole",
    progressStep3Active: "Aggiungi la terza stazione per triangolare",
    interpretation1StationTitle: "🔍 Analisi (1 Stazione)",
    interpretation1StationP1:
      "Tempo S-P: {timeDiff} s. Distanza approx.: <strong>{radius} km</strong>.",
    interpretation1StationP2:
      "Definisce un cerchio di possibili localizzazioni.",
    interpretation2StationsTitle: "📈 Analisi (2 Stazioni)",
    interpretation2StationsP1: "Un'iperbole è definita (linea rossa).",
    interpretation2StationsP2:
      "Differenza di distanza costante da S{s1id} & S{s2id}: <strong>{diff} km</strong>.",
    interpretation3StationsTitle: "🎯 Triangolazione Completata! (3 Stazioni)",
    interpretation3StationsP1:
      "Una seconda iperbole (linea viola) è aggiunta usando S1 & S3.",
    interpretation3StationsP1WithThird:
      "Sono mostrate le iperboli per S1-S2 (rossa), S1-S3 (viola), e S2-S3 (arancione).",
    interpretation3StationsP2:
      "La loro intersezione geometrica (indicatore) individua l'epicentro.",
    explanationTitle: "🧮 Come Funziona il Metodo dell'Iperbole",
    explanationWaveDiffTitle: "1. Differenza Velocità Onde",
    explanationWaveDiffP1:
      "I terremoti generano due tipi principali di onde sismiche:",
    explanationWaveDiffLi1:
      "<strong>Onde P</strong> (Primarie): Più veloci, arrivano prima (~6-8 km/s)",
    explanationWaveDiffLi2:
      "<strong>Onde S</strong> (Secondarie): Più lente, arrivano dopo (~3-4 km/s)",
    explanationTimeDistTitle:
      "2. Relazione Tempo-Distanza (Singola Stazione)",
    explanationTimeDistP1:
      "La differenza di tempo tra l'arrivo delle onde P e S ( \\( \\text{t}_S - \\text{t}_P \\) ) a una stazione è proporzionale alla distanza dall'epicentro. Questa distanza può essere calcolata usando la velocità delle onde P ( \\( \\text{v}_P \\) ) e delle onde S ( \\( \\text{v}_S \\) ):",
    explanationTimeDistP2:
      "Con una stazione, questo definisce un cerchio di possibili localizzazioni dell'epicentro.",
    explanationHyperbolicTitle: "3. Triangolazione Iperbolica",
    explanationHyperbolicP1:
      "Il metodo dell'iperbole usa la differenza nei tempi di arrivo di una specifica onda sismica (es. onda P, o la differenza S-P stessa) a coppie di stazioni.",
    explanationHyperbolicLi1:
      "<strong>1 stazione:</strong> (Usando il tempo S-P) Definisce un cerchio di possibili localizzazioni.",
    explanationHyperbolicLi2:
      "<strong>2 stazioni:</strong> La differenza nei tempi di arrivo di un'onda a queste due stazioni è costante per ogni punto su una specifica iperbole. Le stazioni agiscono come fuochi. Questo definisce un'iperbole.",
    explanationHyperbolicLi3:
      "<strong>3 stazioni:</strong> Una terza stazione permette la determinazione di una seconda, distinta iperbole. Il punto di intersezione geometrica di queste due (o tre) iperboli identifica l'epicentro.",
    explanationRealWorldTitle: "4. Applicazione nel Mondo Reale",
    explanationRealWorldP1:
      "Questo metodo è fondamentale per come le reti sismologiche localizzano i terremoti. Questa simulazione trova l'<strong>epicentro</strong> (il punto sulla superficie terrestre direttamente sopra l'origine del terremoto). L'origine 3D effettiva è chiamata <strong>ipocentro</strong>.",
    explanationRealWorldP2:
      "I dati sismici reali contengono rumore, e i sismologi usano molte stazioni e algoritmi avanzati per localizzazioni precise e affidabili. Le intersezioni visive sulle mappe possono anche essere influenzate dalla proiezione della mappa e dalle approssimazioni del disegno.",
    stationLabel: "Stazione {id}",
    epicenterTooltip: "🎯 Epicentro (Intersezione Iperboli)",
    distanceCircleTooltip: "Cerchio di distanza: {radius} km",
    hyperbolaTooltip: "Iperbole: Stazioni {s1id}-{s2id}",
    dataDistToTrueEpicenter: "Distanza da epicentro reale:",
    dataPWaveArrival: "Arrivo onda P (reale):",
    dataSWaveArrival: "Arrivo onda S (reale):",
    dataSPTimeDiff: "Tempo S-P (reale):",
  },
};
let currentLanguage = "en";
// --- END TRANSLATION DATA ---

class EpicenterLocalization {
  constructor() {
    this.map = null;
    this.epicenter = null;
    this.stations = [];
    this.visualizations = [];
    this.maxStations = 3;
    this.vP = 6.0;
    this.vS = 3.5;
    this.epicenterGeneratedBasedOnFirstStation = false;
    this.showThirdHyperbola = false;
    this.showHyperbolaLabels = false;

    this.initMap();
    this.generateInitialEpicenter();
    this.setupEventListeners();
    this.setLanguage(currentLanguage);
  }

  getTranslatedString(key, replacements = {}) {
    let str = translations[currentLanguage][key] || translations.en[key] || key;
    for (const placeholder in replacements) {
      str = str.replace(
        new RegExp(`{${placeholder}}`, "g"),
        replacements[placeholder],
      );
    }
    return str;
  }

  setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    document
      .querySelectorAll("[data-translate-key]")
      .forEach((element) => {
        const key = element.getAttribute("data-translate-key");
        if (element.id === "labelToggleThirdHyperbola") {
          // This specific label is handled by its checkbox's event listener and here
          const checkbox = document.getElementById("toggleThirdHyperbola");
          element.textContent = this.getTranslatedString(
            checkbox && checkbox.checked
              ? "toggleThirdHyperbolaHide"
              : "toggleThirdHyperbolaShow",
          );
        } else {
          element.innerHTML = this.getTranslatedString(key);
        }
      });

    document.getElementById("langEn").classList.toggle("active", lang === "en");
    document.getElementById("langIt").classList.toggle("active", lang === "it");

    this.updateUI();
    this.updateSeismicData();
    this.updateVisualization(); // Redraws and re-binds tooltips with new lang
  }

  initMap() {
    this.map = L.map("map").setView([40, 0], 3);
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        maxZoom: 18,
      },
    ).addTo(this.map);
    this.map.on("click", (e) => this.addStation(e.latlng));
  }

  generateInitialEpicenter() {
    const lat = 20 + Math.random() * 30;
    const lng = -20 + Math.random() * 40;
    this.epicenter = L.latLng(lat, lng);
    this.epicenterGeneratedBasedOnFirstStation = false;

    if (this.epicenterMarker) {
      this.epicenterMarker
        .setLatLng(this.epicenter)
        .setStyle({ opacity: 0, fillOpacity: 0 });
    } else {
      this.epicenterMarker = L.circleMarker(this.epicenter, {
        radius: 10,
        fillColor: "#ff4757",
        color: "#ffffff",
        weight: 3,
        opacity: 0,
        fillOpacity: 0,
      }).addTo(this.map);
    }
  }

  generateEpicenterNearPoint(point, minRadiusKm = 200, maxRadiusKm = 600) {
    const radiusKm =
      minRadiusKm + Math.random() * (maxRadiusKm - minRadiusKm);
    const angleRad = Math.random() * 2 * Math.PI;
    const kmPerDegreeLat = 111;
    const kmPerDegreeLng = 111 * Math.cos((point.lat * Math.PI) / 180);
    const latOffset = (radiusKm * Math.sin(angleRad)) / kmPerDegreeLat;
    const lngOffset = (radiusKm * Math.cos(angleRad)) / kmPerDegreeLng;
    const newLat = point.lat + latOffset;
    let newLng = point.lng + lngOffset;
    newLng = ((newLng + 180) % 360) - 180;

    this.epicenter = L.latLng(newLat, newLng);
    this.epicenterGeneratedBasedOnFirstStation = true;
    if (this.epicenterMarker) this.epicenterMarker.setLatLng(this.epicenter);

    const boundsToView = L.latLngBounds([point, this.epicenter]);
    if (this.map) this.map.fitBounds(boundsToView.pad(0.5));
  }

  addStation(latlng) {
    if (this.stations.length >= this.maxStations) return;

    if (
      this.stations.length === 0 &&
      !this.epicenterGeneratedBasedOnFirstStation
    ) {
      this.generateEpicenterNearPoint(latlng);
    }

    const stationId = this.stations.length + 1;
    const marker = L.circleMarker(latlng, {
      radius: 12,
      fillColor: "#3742fa",
      color: "#ffffff",
      weight: 3,
      opacity: 1,
      fillOpacity: 0.8,
    }).addTo(this.map);
    marker.bindTooltip(
      this.getTranslatedString("stationLabel", { id: stationId }),
      { permanent: true, direction: "top", className: "station-tooltip" },
    );

    const distance = this.calculateDistance(latlng, this.epicenter);
    const tP = distance / this.vP;
    const tS = distance / this.vS;
    const timeDiff = tS - tP;

    this.stations.push({
      id: stationId,
      latlng,
      marker,
      distance,
      tP,
      tS,
      timeDiff,
    });

    this.updateVisualization();
    this.updateUI();
    this.updateSeismicData();
    if (
      this.stations.length > 0 &&
      this.epicenterGeneratedBasedOnFirstStation
    ) {
      const boundsToView = L.latLngBounds(this.stations.map((s) => s.latlng));
      boundsToView.extend(this.epicenter);
      if (this.map) this.map.fitBounds(boundsToView.pad(0.5));
    }
  }

  updateVisualization() {
    this.clearVisualization();
    let h1_raw_points = null;
    let h2_raw_points = null;

    if (this.stations.length === 1) {
      this.drawLocationCircle(this.stations[0]);
    } else if (this.stations.length === 2) {
      h1_raw_points = this.drawHyperbola(
        this.stations[0],
        this.stations[1],
        "#e74c3c",
      );
    } else if (this.stations.length === 3) {
      h1_raw_points = this.drawHyperbola(
        this.stations[0],
        this.stations[1],
        "#e74c3c",
      );
      h2_raw_points = this.drawHyperbola(
        this.stations[0],
        this.stations[2],
        "#9b59b6",
      );
      if (this.showThirdHyperbola) {
        this.drawHyperbola(
          this.stations[1],
          this.stations[2],
          "#f39c12",
        );
      }

      let finalEpicenterToShow = this.epicenter;
      if (
        h1_raw_points &&
        h1_raw_points.length > 1 &&
        h2_raw_points &&
        h2_raw_points.length > 1
      ) {
        const line1Coords = h1_raw_points.map((p) => [p[1], p[0]]);
        const line2Coords = h2_raw_points.map((p) => [p[1], p[0]]);
        const turfLine1 = turf.lineString(line1Coords);
        const turfLine2 = turf.lineString(line2Coords);
        try {
          const intersections = turf.lineIntersect(turfLine1, turfLine2);
          if (intersections.features.length > 0) {
            const intersectionPointCoords =
              intersections.features[0].geometry.coordinates;
            finalEpicenterToShow = L.latLng(
              intersectionPointCoords[1],
              intersectionPointCoords[0],
            );
          } else {
            finalEpicenterToShow = this.getFallbackVisualEpicenter(
              h1_raw_points,
              h2_raw_points,
            );
          }
        } catch (e) {
          finalEpicenterToShow = this.getFallbackVisualEpicenter(
            h1_raw_points,
            h2_raw_points,
          );
        }
      }
      this.revealEpicenter(finalEpicenterToShow);
      if (this.epicenterMarker) this.epicenterMarker.bringToFront();
    }
  }

  getFallbackVisualEpicenter(h1_raw_points, h2_raw_points) {
    if (
      !h1_raw_points ||
      h1_raw_points.length === 0 ||
      !h2_raw_points ||
      h2_raw_points.length === 0
    ) {
      return this.epicenter;
    }
    const h1_latlngs = h1_raw_points.map((p) => L.latLng(p[0], p[1]));
    const h2_latlngs = h2_raw_points.map((p) => L.latLng(p[0], p[1]));
    const closestVertexOnH1 = this.findClosestVertexOnPolyline(
      h1_latlngs,
      this.epicenter,
    );
    const closestVertexOnH2 = this.findClosestVertexOnPolyline(
      h2_latlngs,
      this.epicenter,
    );
    if (closestVertexOnH1 && closestVertexOnH2) {
      const visualLat = (closestVertexOnH1.lat + closestVertexOnH2.lat) / 2;
      const visualLng = (closestVertexOnH1.lng + closestVertexOnH2.lng) / 2;
      return L.latLng(visualLat, visualLng);
    }
    return this.epicenter;
  }

  clearVisualization() {
    this.visualizations.forEach((viz) => {
      if (viz.layer && this.map.hasLayer(viz.layer)) {
        if (viz.layer.getTooltip()) viz.layer.unbindTooltip();
        this.map.removeLayer(viz.layer);
      }
    });
    this.visualizations = [];
  }

  drawLocationCircle(station) {
    const radius =
      (station.timeDiff * (this.vP * this.vS)) / (this.vP - this.vS);
    const circle = L.circle(station.latlng, {
      color: "#ffa502",
      weight: 3,
      opacity: 0.8,
      fillOpacity: 0.1,
      fillColor: "#ffa502",
      radius: radius * 1000,
    }).addTo(this.map);
    circle.bindTooltip(
      this.getTranslatedString("distanceCircleTooltip", {
        radius: radius.toFixed(1),
      }),
      { permanent: false, className: "location-tooltip" },
    );
    this.visualizations.push({ type: "circle", layer: circle });
  }

  drawHyperbola(station1, station2, color) {
    const d1 = station1.distance;
    const d2 = station2.distance;
    const constantDiff = Math.abs(d1 - d2);
    const hyperbolaPoints = this.generateHyperbolaPoints(
      station1.latlng,
      station2.latlng,
      constantDiff,
    );

    if (!hyperbolaPoints || hyperbolaPoints.length < 2) {
      // console.warn(`Failed to generate hyperbola points for S${station1.id}-S${station2.id}`);
      return null;
    }

    const polyline = L.polyline(hyperbolaPoints, {
      color: color,
      weight: 2.5,
      opacity: 0.9,
      dashArray: "8, 4",
    }).addTo(this.map);

    const vizObj = {
      type: "hyperbola",
      layer: polyline,
      s1id: station1.id,
      s2id: station2.id,
    };
    this.visualizations.push(vizObj);
    this.updateHyperbolaLabel(vizObj); // Apply initial label state

    return hyperbolaPoints;
  }

  updateHyperbolaLabel(vizObj) {
    if (vizObj.type === "hyperbola" && vizObj.layer) {
      const polyline = vizObj.layer;
      if (polyline.getTooltip()) {
        polyline.unbindTooltip();
      }
      const tooltipText = this.getTranslatedString("hyperbolaTooltip", {
        s1id: vizObj.s1id,
        s2id: vizObj.s2id,
      });

      if (this.showHyperbolaLabels) {
        polyline.bindTooltip(tooltipText, {
          permanent: true,
          direction: "center", // Often good for polylines
          className: "hyperbola-permanent-label",
          offset: L.point(0, -5), // Nudge slightly above the line
        });
      } else {
        polyline.bindTooltip(tooltipText, {
          permanent: false,
          className: "hyperbola-tooltip",
        });
      }
    }
  }

  findClosestVertexOnPolyline(polylineLatLngs, targetLatLng) {
    if (!polylineLatLngs || polylineLatLngs.length === 0) return null;
    let minDistance = Infinity;
    let closestVertex = null;
    for (const vertex of polylineLatLngs) {
      const d = targetLatLng.distanceTo(vertex);
      if (d < minDistance) {
        minDistance = d;
        closestVertex = vertex;
      }
    }
    return closestVertex
      ? L.latLng(closestVertex.lat, closestVertex.lng)
      : null;
  }

  generateHyperbolaPoints(focus1, focus2, constantDiff) {
    const points = [];
    const f1_km = this.latLngToKm(focus1);
    const f2_km = this.latLngToKm(focus2);
    const centerX = (f1_km.x + f2_km.x) / 2;
    const centerY = (f1_km.y + f2_km.y) / 2;
    const focalDistance = Math.sqrt(
      Math.pow(f2_km.x - f1_km.x, 2) + Math.pow(f2_km.y - f1_km.y, 2),
    );
    if (focalDistance < 1e-3) { // Increased tolerance slightly
      // console.warn("Foci too close for hyperbola generation:", focus1, focus2);
      return [];
    }
    const c = focalDistance / 2;
    const a = constantDiff / 2;

    if (a > c - 1e-3 || a < 1e-3) { // a must be < c and a > 0 (allow for small errors)
        // console.warn(`Invalid hyperbola params: a=${a}, c=${c} for S${focus1.id_placeholder}-S${focus2.id_placeholder}`);
        return [];
    }
    const bSquared = c * c - a * a;
    if (bSquared < 1e-6) { // b^2 must be positive
        // console.warn(`Invalid hyperbola params: bSquared=${bSquared} for S${focus1.id_placeholder}-S${focus2.id_placeholder}`);
        return [];
    }
    const b = Math.sqrt(bSquared);

    const angle = Math.atan2(f2_km.y - f1_km.y, f2_km.x - f1_km.x);
    const epicenterKm = this.latLngToKm(this.epicenter);
    const d1ToEpicenter = Math.sqrt(
      Math.pow(epicenterKm.x - f1_km.x, 2) +
        Math.pow(epicenterKm.y - f1_km.y, 2),
    );
    const d2ToEpicenter = Math.sqrt(
      Math.pow(epicenterKm.x - f2_km.x, 2) +
        Math.pow(epicenterKm.y - f2_km.y, 2),
    );
    const usePositiveBranch = d1ToEpicenter - d2ToEpicenter > 0;
    const numPoints = 300;
    const tMax = 7; // Slightly increased tMax for longer arms if needed
    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * tMax;
      let x_param, y_param;
      if (usePositiveBranch) x_param = a * Math.cosh(t);
      else x_param = -a * Math.cosh(t);
      y_param = b * Math.sinh(t);
      let rotatedX = x_param * Math.cos(angle) - y_param * Math.sin(angle);
      let rotatedY = x_param * Math.sin(angle) + y_param * Math.cos(angle);
      let finalX = centerX + rotatedX;
      let finalY = centerY + rotatedY;
      let latLng = this.kmToLatLng({ x: finalX, y: finalY });
      if (this.isWithinMapBounds(latLng))
        points.push([latLng.lat, latLng.lng]);
      if (t > 0) {
        y_param = -b * Math.sinh(t);
        rotatedX = x_param * Math.cos(angle) - y_param * Math.sin(angle);
        rotatedY = x_param * Math.sin(angle) + y_param * Math.cos(angle);
        finalX = centerX + rotatedX;
        finalY = centerY + rotatedY;
        latLng = this.kmToLatLng({ x: finalX, y: finalY });
        if (this.isWithinMapBounds(latLng))
          points.unshift([latLng.lat, latLng.lng]);
      }
    }
    return points;
  }

  latLngToKm(latLng) {
    const refLat = this.map ? this.map.getCenter().lat : 42;
    const kmPerDegLat = 111;
    const kmPerDegLng = 111 * Math.cos((refLat * Math.PI) / 180);
    return { x: latLng.lng * kmPerDegLng, y: latLng.lat * kmPerDegLat };
  }

  kmToLatLng(point) {
    const refLat = this.map ? this.map.getCenter().lat : 42;
    const kmPerDegLat = 111;
    const kmPerDegLng = 111 * Math.cos((refLat * Math.PI) / 180);
    return { lat: point.y / kmPerDegLat, lng: point.x / kmPerDegLng };
  }

  isWithinMapBounds(latLng) {
    if (!this.map) return true;
    const mapBounds = this.map.getBounds();
    return mapBounds.pad(1.5).contains(latLng); // Reduced padding slightly
  }

  calculateDistance(latlng1, latlng2) {
    const R = 6371;
    const dLat = this.toRadians(latlng2.lat - latlng1.lat);
    const dLng = this.toRadians(latlng2.lng - latlng1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(latlng1.lat)) *
        Math.cos(this.toRadians(latlng2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  revealEpicenter(positionToUse) {
    const finalPosition = positionToUse || this.epicenter;
    this.epicenterMarker.setLatLng(finalPosition);
    this.epicenterMarker.setStyle({
      opacity: 1,
      fillOpacity: 0.9,
      radius: 12,
    });
    this.epicenterMarker.bindTooltip(
      this.getTranslatedString("epicenterTooltip"),
      { permanent: true, direction: "top", className: "epicenter-tooltip" },
    );
    let pulseSize = 12;
    const pulseInterval = setInterval(() => {
      pulseSize = pulseSize === 12 ? 16 : 12;
      this.epicenterMarker.setStyle({ radius: pulseSize });
    }, 800);
    setTimeout(() => {
      clearInterval(pulseInterval);
      this.epicenterMarker.setStyle({ radius: 10 });
    }, 3000);
  }

  updateUI() {
    document.getElementById("stationCount").textContent = this.stations.length;
    this.updateInstructionText();
    this.updateProgress();
  }

  updateInstructionText() {
    const instructionDiv = document.querySelector(".instruction");
    if (this.stations.length < this.maxStations) {
      instructionDiv.innerHTML = this.getTranslatedString(
        "instructionPlaceStation",
        { num: this.stations.length + 1 },
      );
    } else {
      instructionDiv.innerHTML = this.getTranslatedString(
        "instructionAllPlaced",
      );
    }
  }

  updateProgress() {
    const steps = document.querySelectorAll(".progress-step");
    const stepTextKeysDone = [
      "progressStep1Done",
      "progressStep2Done",
      "progressStep3Done",
    ];
    const stepTextKeysActive = [
      "progressStep1Active",
      "progressStep2Active",
      "progressStep3Active",
    ];
    const stepTextKeysInitial = [
      "progressStep1Initial",
      "progressStep2Initial",
      "progressStep3Initial",
    ];

    steps.forEach((step, index) => {
      step.classList.remove("active", "completed");
      const stepTextElement = step.querySelector(".step-text");
      let translationKey = stepTextKeysInitial[index];
      if (index < this.stations.length) {
        step.classList.add("completed");
        translationKey = stepTextKeysDone[index];
      } else if (index === this.stations.length && index < this.maxStations) {
        step.classList.add("active");
        translationKey = stepTextKeysActive[index];
      } else if (index > this.stations.length) {
        translationKey =
          stepTextKeysActive[index] || stepTextKeysInitial[index];
      }
      stepTextElement.innerHTML = this.getTranslatedString(translationKey);
    });
  }

  updateSeismicData() {
    const container = document.getElementById("seismicData");
    if (this.stations.length === 0) {
      container.innerHTML = `<p class="no-data">${this.getTranslatedString(
        "seismicDataNoData",
      )}</p>`;
      return;
    }
    let html = "";
    this.stations.forEach((station) => {
      html += `
        <div class="station-data">
          <h4>${this.getTranslatedString("stationLabel", { id: station.id })}</h4>
          <div class="data-row">
            <span>${this.getTranslatedString("dataDistToTrueEpicenter")}</span>
            <span>${station.distance.toFixed(1)} km</span>
          </div>
          <div class="data-row">
            <span>${this.getTranslatedString("dataPWaveArrival")}</span>
            <span>${station.tP.toFixed(2)} s</span>
          </div>
          <div class="data-row">
            <span>${this.getTranslatedString("dataSWaveArrival")}</span>
            <span>${station.tS.toFixed(2)} s</span>
          </div>
          <div class="data-row">
            <span><strong>${this.getTranslatedString("dataSPTimeDiff")}</strong></span>
            <span><strong>${station.timeDiff.toFixed(2)} s</strong></span>
          </div>
        </div>`;
    });
    if (this.stations.length === 1) {
      const radius =
        (this.stations[0].timeDiff * (this.vP * this.vS)) /
        (this.vP - this.vS);
      html += `
        <div class="interpretation">
          <h4>${this.getTranslatedString("interpretation1StationTitle")}</h4>
          <p>${this.getTranslatedString("interpretation1StationP1", {
            timeDiff: this.stations[0].timeDiff.toFixed(2),
            radius: radius.toFixed(1),
          })}</p>
          <p>${this.getTranslatedString("interpretation1StationP2")}</p>
        </div>`;
    } else if (this.stations.length === 2) {
      const diff = Math.abs(
        this.stations[0].distance - this.stations[1].distance,
      );
      html += `
        <div class="interpretation">
          <h4>${this.getTranslatedString("interpretation2StationsTitle")}</h4>
          <p>${this.getTranslatedString("interpretation2StationsP1")}</p>
          <p>${this.getTranslatedString("interpretation2StationsP2", {
            s1id: this.stations[0].id,
            s2id: this.stations[1].id,
            diff: diff.toFixed(1),
          })}</p>
        </div>`;
    } else if (this.stations.length === 3) {
      const p1Key = this.showThirdHyperbola
        ? "interpretation3StationsP1WithThird"
        : "interpretation3StationsP1";
      html += `
        <div class="interpretation">
          <h4>${this.getTranslatedString("interpretation3StationsTitle")}</h4>
          <p>${this.getTranslatedString(p1Key)}</p>
          <p>${this.getTranslatedString("interpretation3StationsP2")}</p>
        </div>`;
    }
    container.innerHTML = html;
  }

  reset() {
    this.stations.forEach((station) => {
      if (station.marker && this.map.hasLayer(station.marker)) {
        this.map.removeLayer(station.marker);
      }
    });
    this.clearVisualization();
    if (this.epicenterMarker) {
      if (this.epicenterMarker.getTooltip())
        this.epicenterMarker.unbindTooltip();
      this.epicenterMarker.setStyle({ opacity: 0, fillOpacity: 0 });
    }
    this.stations = [];
    this.generateInitialEpicenter();
    this.epicenterGeneratedBasedOnFirstStation = false;

    // Reset toggle checkboxes to their default visual state (off)
    // and update internal state variables accordingly.
    const thirdHyperbolaCheckbox = document.getElementById("toggleThirdHyperbola");
    if (thirdHyperbolaCheckbox) thirdHyperbolaCheckbox.checked = false;
    this.showThirdHyperbola = false;

    const hyperbolaLabelsCheckbox = document.getElementById("toggleHyperbolaLabels");
    if (hyperbolaLabelsCheckbox) hyperbolaLabelsCheckbox.checked = false;
    this.showHyperbolaLabels = false;
    
    // Update the label for the third hyperbola toggle after resetting its state
    const thirdHyperbolaLabelSpan = document.getElementById("labelToggleThirdHyperbola");
    if (thirdHyperbolaLabelSpan) {
        thirdHyperbolaLabelSpan.textContent = this.getTranslatedString("toggleThirdHyperbolaShow");
    }


    this.updateUI();
    this.updateSeismicData();
    if (this.map) this.map.setView([40, 0], 3);
  }

  setupEventListeners() {
    document
      .getElementById("resetBtn")
      .addEventListener("click", () => this.reset());
    document
      .getElementById("langEn")
      .addEventListener("click", () => this.setLanguage("en"));
    document
      .getElementById("langIt")
      .addEventListener("click", () => this.setLanguage("it"));

    const thirdHyperbolaCheckbox = document.getElementById(
      "toggleThirdHyperbola",
    );
    const thirdHyperbolaLabelSpan = document.getElementById(
      "labelToggleThirdHyperbola",
    );
    thirdHyperbolaCheckbox.addEventListener("change", (e) => {
      this.showThirdHyperbola = e.target.checked;
      thirdHyperbolaLabelSpan.textContent = this.getTranslatedString(
        this.showThirdHyperbola
          ? "toggleThirdHyperbolaHide"
          : "toggleThirdHyperbolaShow",
      );
      this.updateVisualization();
      this.updateSeismicData();
    });

    document
      .getElementById("toggleHyperbolaLabels")
      .addEventListener("change", (e) => {
        this.showHyperbolaLabels = e.target.checked;
        this.visualizations.forEach((viz) => {
          if (viz.type === "hyperbola") {
            this.updateHyperbolaLabel(viz);
          }
        });
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.epicenterApp = new EpicenterLocalization();
});

const style = document.createElement("style");
style.textContent = `
  .station-tooltip, .epicenter-tooltip, .location-tooltip, .hyperbola-tooltip {
    background: rgba(0, 0, 0, 0.85) !important; border: none !important;
    border-radius: 8px !important; color: white !important;
    font-weight: 600 !important; font-size: 12px !important;
    padding: 8px 12px !important; box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
  }
  .hyperbola-permanent-label {
    background: rgba(0, 0, 0, 0.75) !important;
    border: none !important;
    border-radius: 4px !important;
    color: white !important;
    font-size: 10px !important;
    padding: 2px 5px !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3) !important;
    white-space: nowrap;
  }
  .interpretation {
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05));
    padding: 15px; border-radius: 12px; margin-top: 15px;
    border: 1px solid rgba(76, 175, 80, 0.25);
  }
  .interpretation h4 { margin-bottom: 10px; color: #4caf50; font-size: 1.05rem; }
  .interpretation p { font-size: 0.88rem; line-height: 1.5; margin-bottom: 6px; opacity: 0.9; }
  .interpretation p:last-child { margin-bottom: 0; }
`;
document.head.appendChild(style);