// translations.js - Comprehensive language translations for all pages

// Language management functions
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

function getLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function getTranslation(key) {
    const lang = getLanguage();
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
        value = value ? value[k] : undefined;
        if (!value) return key;
    }
    
    return value;
}

// Language names for dropdown
const languageNames = {
    'en': 'English',
    'lt': 'Lietuvių',
    'es': 'Español',
    'ru': 'Русский',
    'de': 'Deutsch'
};

const translations = {
    en: {
        index: {
            title: "Natural Disaster Simulators",
            subtitle: "Experience and understand the power of nature's most devastating phenomena",
            footer: "Educational simulators for understanding natural disaster dynamics and safety protocols",
            downloadButton: "Download Desktop App",
            downloadAlert: "Desktop app coming soon!",
            tornado: {
                title: "Tornado",
                description: "Simulate powerful tornadoes and understand their devastating force through the Enhanced Fujita Scale.",
                feature1: "Wind speeds up to 320 mph",
                feature2: "EF0 to EF5 scale ratings",
                feature3: "Damage predictions",
                feature4: "Safety warnings",
                button: "Launch Simulator"
            },
            earthquake: {
                title: "Earthquake",
                description: "Explore seismic activity from minor tremors to catastrophic quakes on the Moment Magnitude Scale.",
                feature1: "Magnitude 1.0 to 10.0",
                feature2: "Depth and distance factors",
                feature3: "Tsunami risk assessment",
                feature4: "Energy calculations",
                button: "Launch Simulator"
            },
            tsunami: {
                title: "Tsunami",
                description: "Witness the immense power of ocean waves triggered by underwater earthquakes and understand coastal impacts.",
                feature1: "Wave heights up to 20+ meters",
                feature2: "Run-up and inundation data",
                feature3: "Arrival time predictions",
                feature4: "Coastal impact analysis",
                button: "Launch Simulator"
            },
            flood: {
                title: "Flood",
                description: "Simulate flooding scenarios from heavy rainfall and understand water level dynamics and evacuation needs.",
                feature1: "Rainfall intensity control",
                feature2: "Terrain and drainage factors",
                feature3: "Water level predictions",
                feature4: "Evacuation zone mapping",
                button: "Launch Simulator"
            },
            wildfire: {
                title: "Wildfire",
                description: "Experience wildfire behavior based on weather, terrain, and fuel conditions. Understand fire intensity and spread.",
                feature1: "Fire intensity calculations",
                feature2: "Wind and humidity effects",
                feature3: "Spread rate predictions",
                feature4: "Evacuation planning",
                button: "Launch Simulator"
            },
            solarstorm: {
                title: "Solar Storm",
                description: "Explore geomagnetic storms and solar flares. Understand their effects on power grids, satellites, and technology.",
                feature1: "G-scale storm ratings",
                feature2: "CME and flare simulations",
                feature3: "Technology impact analysis",
                feature4: "Aurora visibility predictions",
                button: "Launch Simulator"
            },
            meteor: {
                title: "Meteor Impact",
                description: "Simulate asteroid and meteor impacts. Calculate kinetic energy, crater size, and destruction radius.",
                feature1: "Impact energy calculations",
                feature2: "Crater diameter predictions",
                feature3: "Shockwave and thermal effects",
                feature4: "Threat level assessment",
                button: "Launch Simulator"
            },
            heatwave: {
                title: "Heatwave",
                description: "Model extreme heat events with heat index calculations. Understand health risks and infrastructure stress.",
                feature1: "Heat index calculator",
                feature2: "Health risk assessments",
                feature3: "Power grid stress analysis",
                feature4: "Heat exhaustion timing",
                button: "Launch Simulator"
            },
            landslide: {
                title: "Landslide",
                description: "Simulate mountain slope failures and debris flows. Analyze soil saturation, slope angle, and run-out distance.",
                feature1: "Slope stability analysis",
                feature2: "Debris flow velocity",
                feature3: "Run-out distance calculations",
                feature4: "Risk assessment",
                button: "Launch Simulator"
            }
        },
        common: {
            backButton: "Back to Home",
            parameters: "Parameters",
            damageDescription: "Damage Description",
            safetyWarning: "Safety Warning",
            expectedEffects: "Expected Effects",
            expectedImpact: "Expected Impact",
            healthImpacts: "Health Impacts",
            impactEffects: "Impact Effects",
            fireBehavior: "Fire Behavior",
            landslideCharacteristics: "Landslide Characteristics",
            safetyAdvisory: "Safety Advisory",
            healthAdvisory: "Health Advisory",
            threatAssessment: "Threat Assessment",
            tsunamiRisk: "Tsunami Risk Assessment"
        },
        tornado: {
            title: "Tornado Simulator",
            windSpeed: "Wind Speed (mph)",
            width: "Tornado Width (meters)",
            pathLength: "Path Length (km)",
            rotationSpeed: "Rotation Speed (rpm)"
        },
        earthquake: {
            title: "Earthquake Simulator",
            magnitude: "Magnitude",
            depth: "Depth (km)",
            distance: "Distance from Epicenter (km)",
            duration: "Duration (seconds)",
            underwater: "Underwater (Ocean/Sea)"
        },
        tsunami: {
            title: "Tsunami Simulator",
            magnitude: "Source Earthquake Magnitude",
            waterDepth: "Ocean Depth (meters)",
            distance: "Distance from Source (km)",
            slope: "Coastal Slope (degrees)",
            elevation: "Coastal Elevation (meters)"
        },
        flood: {
            title: "Flood Simulator",
            rainfall: "Rainfall Intensity (mm/hour)",
            duration: "Duration (hours)",
            terrain: "Terrain Slope (degrees)",
            drainage: "Drainage System Capacity (%)",
            riverLevel: "River Base Level (meters)"
        },
        wildfire: {
            title: "Wildfire Simulator",
            temperature: "Air Temperature (°C)",
            windSpeed: "Wind Speed (km/h)",
            humidity: "Relative Humidity (%)",
            fuelMoisture: "Fuel Moisture Content (%)",
            slope: "Terrain Slope (degrees)"
        },
        solarstorm: {
            title: "Solar Storm Simulator",
            flareClass: "Solar Flare Class",
            cmeSpeed: "CME Speed (km/s)",
            protonFlux: "Proton Flux (pfu)",
            kpIndex: "Geomagnetic Kp Index",
            duration: "Storm Duration (hours)"
        },
        meteor: {
            title: "Meteor Impact Simulator",
            diameter: "Meteor Diameter (meters)",
            velocity: "Impact Velocity (km/s)",
            angle: "Impact Angle (degrees from horizontal)",
            density: "Meteor Density (kg/m³)",
            altitude: "Explosion Altitude (km)",
            waterImpact: "Impact in Ocean/Water"
        },
        heatwave: {
            title: "Heatwave Simulator",
            temperature: "Air Temperature (°C)",
            humidity: "Relative Humidity (%)",
            windSpeed: "Wind Speed (km/h)",
            duration: "Duration (consecutive days)",
            uvIndex: "UV Index"
        },
        landslide: {
            title: "Landslide Simulator",
            slope: "Slope Angle (degrees)",
            saturation: "Soil Saturation (%)",
            rainfall: "Recent Rainfall (mm/24h)",
            cohesion: "Soil Cohesion (kPa)",
            vegetation: "Vegetation Cover (%)"
        }
    },
    lt: {
        index: {
            title: "Gamtos Nelaimių Simuliatoriai",
            subtitle: "Patirkite ir supraskite galingiausius gamtos reiškinius",
            footer: "Edukaciniai simuliatoriai gamtos nelaimių dinamikai ir saugumo protokolams suprasti",
            downloadButton: "Atsisiųsti Programą",
            downloadAlert: "Programa netrukus!",
            tornado: {
                title: "Tornadas",
                description: "Simuliuokite galingus tornados ir supaskite jų naikinančią galią pagal Patobulintą Fujita skalę.",
                feature1: "Vėjo greitis iki 515 km/h",
                feature2: "EF0 iki EF5 skalės įvertinimai",
                feature3: "Žalos prognozės",
                feature4: "Saugumo įspėjimai",
                button: "Paleisti Simuliatorių"
            },
            earthquake: {
                title: "Žemės Drebėjimas",
                description: "Ištyrinėkite seisminį aktyvumą nuo mažų drebėjimų iki katastrofinių žemės drebėjimų.",
                feature1: "Magnitudė nuo 1.0 iki 10.0",
                feature2: "Gylio ir atstumo veiksniai",
                feature3: "Cunamio rizikos vertinimas",
                feature4: "Energijos skaičiavimai",
                button: "Paleisti Simuliatorių"
            },
            tsunami: {
                title: "Cunamis",
                description: "Stebėkite milžinišką vandenyno bangų galią ir supaskite poveikį pakrantėms.",
                feature1: "Bangų aukštis iki 20+ metrų",
                feature2: "Užliejimo duomenys",
                feature3: "Atvykimo laiko prognozės",
                feature4: "Pakrantės poveikio analizė",
                button: "Paleisti Simuliatorių"
            },
            flood: {
                title: "Potvynis",
                description: "Simuliuokite potvynių scenarijus ir supaskite vandens lygio dinamiką.",
                feature1: "Kritulių intensyvumo valdymas",
                feature2: "Reljefo ir drenažo veiksniai",
                feature3: "Vandens lygio prognozės",
                feature4: "Evakuacijos zonų žymėjimas",
                button: "Paleisti Simuliatorių"
            },
            wildfire: {
                title: "Miško Gaisras",
                description: "Patirkite miško gaisrų elgesį. Supaskite gaisro intensyvumą ir plitimą.",
                feature1: "Gaisro intensyvumo skaičiavimai",
                feature2: "Vėjo ir drėgmės poveikis",
                feature3: "Plitimo greičio prognozės",
                feature4: "Evakuacijos planavimas",
                button: "Paleisti Simuliatorių"
            },
            solarstorm: {
                title: "Saulės Audra",
                description: "Tyrinėkite geomagnetines audras ir saulės liepsnas.",
                feature1: "G-skalės audros įvertinimai",
                feature2: "KMI ir liepsnos simuliacijos",
                feature3: "Technologijų poveikio analizė",
                feature4: "Poliarinių pašvaičių prognozės",
                button: "Paleisti Simuliatorių"
            },
            meteor: {
                title: "Meteoro Smūgis",
                description: "Simuliuokite asteroidų ir meteorų smūgius.",
                feature1: "Smūgio energijos skaičiavimai",
                feature2: "Kraterio skersmens prognozės",
                feature3: "Smūgio bangos ir šiluminis poveikis",
                feature4: "Grėsmės lygio vertinimas",
                button: "Paleisti Simuliatorių"
            },
            heatwave: {
                title: "Karščio Banga",
                description: "Modeliuokite ekstremalaus karščio įvykius.",
                feature1: "Karščio indekso skaičiuoklė",
                feature2: "Sveikatos rizikos vertinimai",
                feature3: "Elektros tinklo streso analizė",
                feature4: "Karščio išsekimo laikas",
                button: "Paleisti Simuliatorių"
            },
            landslide: {
                title: "Nuošliauža",
                description: "Simuliuokite kalnų šlaitų griūtis ir nuolaužų srautus.",
                feature1: "Šlaito stabilumo analizė",
                feature2: "Nuolaužų srauto greitis",
                feature3: "Nubėgimo atstumo skaičiavimai",
                feature4: "Rizikos vertinimas",
                button: "Paleisti Simuliatorių"
            }
        },
        common: {
            backButton: "Grįžti į Pradžią",
            parameters: "Parametrai",
            damageDescription: "Žalos Aprašymas",
            safetyWarning: "Saugumo Įspėjimas",
            expectedEffects: "Laukiamas Poveikis",
            expectedImpact: "Laukiamas Poveikis",
            healthImpacts: "Poveikis Sveikatai",
            impactEffects: "Smūgio Padariniai",
            fireBehavior: "Gaisro Elgesys",
            landslideCharacteristics: "Nuošliaužos Charakteristikos",
            safetyAdvisory: "Saugumo Patarimai",
            healthAdvisory: "Sveikatos Patarimai",
            threatAssessment: "Grėsmės Vertinimas",
            tsunamiRisk: "Cunamio Rizikos Vertinimas"
        },
        tornado: {
            title: "Tornados Simuliatorius",
            windSpeed: "Vėjo Greitis (mph)",
            width: "Tornados Plotis (metrai)",
            pathLength: "Kelio Ilgis (km)",
            rotationSpeed: "Sukimosi Greitis (rpm)"
        },
        earthquake: {
            title: "Žemės Drebėjimo Simuliatorius",
            magnitude: "Magnitudė",
            depth: "Gylis (km)",
            distance: "Atstumas nuo Epicentro (km)",
            duration: "Trukmė (sekundės)",
            underwater: "Po Vandeniu (Vandenynas/Jūra)"
        },
        tsunami: {
            title: "Cunamio Simuliatorius",
            magnitude: "Šaltinio Žemės Drebėjimo Magnitudė",
            waterDepth: "Vandenyno Gylis (metrai)",
            distance: "Atstumas nuo Šaltinio (km)",
            slope: "Pakrantės Nuolydis (laipsniai)",
            elevation: "Pakrantės Aukštis (metrai)"
        },
        flood: {
            title: "Potvynio Simuliatorius",
            rainfall: "Kritulių Intensyvumas (mm/valandą)",
            duration: "Trukmė (valandos)",
            terrain: "Reljefo Nuolydis (laipsniai)",
            drainage: "Drenažo Sistemos Pajėgumas (%)",
            riverLevel: "Upės Bazinis Lygis (metrai)"
        },
        wildfire: {
            title: "Miško Gaisro Simuliatorius",
            temperature: "Oro Temperatūra (°C)",
            windSpeed: "Vėjo Greitis (km/h)",
            humidity: "Santykinė Drėgmė (%)",
            fuelMoisture: "Kuro Drėgmės Kiekis (%)",
            slope: "Reljefo Nuolydis (laipsniai)"
        },
        solarstorm: {
            title: "Saulės Audros Simuliatorius",
            flareClass: "Saulės Liepsnos Klasė",
            cmeSpeed: "KMI Greitis (km/s)",
            protonFlux: "Protonų Srautas (pfu)",
            kpIndex: "Geomagnetinis Kp Indeksas",
            duration: "Audros Trukmė (valandos)"
        },
        meteor: {
            title: "Meteoro Smūgio Simuliatorius",
            diameter: "Meteoro Skersmuo (metrai)",
            velocity: "Smūgio Greitis (km/s)",
            angle: "Smūgio Kampas (laipsniai nuo horizontalės)",
            density: "Meteoro Tankis (kg/m³)",
            altitude: "Sprogimo Aukštis (km)",
            waterImpact: "Smūgis į Vandenyną/Vandenį"
        },
        heatwave: {
            title: "Karščio Bangos Simuliatorius",
            temperature: "Oro Temperatūra (°C)",
            humidity: "Santykinė Drėgmė (%)",
            windSpeed: "Vėjo Greitis (km/h)",
            duration: "Trukmė (dienų iš eilės)",
            uvIndex: "UV Indeksas"
        },
        landslide: {
            title: "Nuošliaužos Simuliatorius",
            slope: "Šlaito Kampas (laipsniai)",
            saturation: "Dirvožemio Prisotinimas (%)",
            rainfall: "Naujausi Krituliai (mm/24h)",
            cohesion: "Dirvožemio Kohezija (kPa)",
            vegetation: "Augmenijos Danga (%)"
        }
    },
    es: {
        index: {
            title: "Simuladores de Desastres Naturales",
            subtitle: "Experimenta y comprende el poder de los fenómenos más devastadores de la naturaleza",
            footer: "Simuladores educativos para comprender la dinámica de desastres naturales y protocolos de seguridad",
            downloadButton: "Descargar Aplicación",
            downloadAlert: "¡Aplicación próximamente!",
            tornado: {
                title: "Tornado",
                description: "Simula tornados poderosos y comprende su fuerza devastadora a través de la Escala Fujita Mejorada.",
                feature1: "Velocidades de viento hasta 515 km/h",
                feature2: "Clasificaciones de escala EF0 a EF5",
                feature3: "Predicciones de daños",
                feature4: "Advertencias de seguridad",
                button: "Iniciar Simulador"
            },
            earthquake: {
                title: "Terremoto",
                description: "Explora la actividad sísmica desde temblores menores hasta terremotos catastróficos.",
                feature1: "Magnitud de 1.0 a 10.0",
                feature2: "Factores de profundidad y distancia",
                feature3: "Evaluación de riesgo de tsunami",
                feature4: "Cálculos de energía",
                button: "Iniciar Simulador"
            },
            tsunami: {
                title: "Tsunami",
                description: "Presencia el inmenso poder de las olas del océano desencadenadas por terremotos submarinos.",
                feature1: "Alturas de ola hasta 20+ metros",
                feature2: "Datos de inundación",
                feature3: "Predicciones de tiempo de llegada",
                feature4: "Análisis de impacto costero",
                button: "Iniciar Simulador"
            },
            flood: {
                title: "Inundación",
                description: "Simula escenarios de inundación por lluvias intensas y comprende la dinámica del nivel del agua.",
                feature1: "Control de intensidad de lluvia",
                feature2: "Factores de terreno y drenaje",
                feature3: "Predicciones de nivel de agua",
                feature4: "Mapeo de zonas de evacuación",
                button: "Iniciar Simulador"
            },
            wildfire: {
                title: "Incendio Forestal",
                description: "Experimenta el comportamiento de incendios forestales basado en clima, terreno y condiciones de combustible.",
                feature1: "Cálculos de intensidad del fuego",
                feature2: "Efectos del viento y humedad",
                feature3: "Predicciones de tasa de propagación",
                feature4: "Planificación de evacuación",
                button: "Iniciar Simulador"
            },
            solarstorm: {
                title: "Tormenta Solar",
                description: "Explora tormentas geomagnéticas y llamaradas solares.",
                feature1: "Clasificaciones de tormenta G",
                feature2: "Simulaciones de CME y llamaradas",
                feature3: "Análisis de impacto tecnológico",
                feature4: "Predicciones de visibilidad de auroras",
                button: "Iniciar Simulador"
            },
            meteor: {
                title: "Impacto de Meteoro",
                description: "Simula impactos de asteroides y meteoros.",
                feature1: "Cálculos de energía de impacto",
                feature2: "Predicciones de diámetro de cráter",
                feature3: "Efectos de onda de choque y térmicos",
                feature4: "Evaluación de nivel de amenaza",
                button: "Iniciar Simulador"
            },
            heatwave: {
                title: "Ola de Calor",
                description: "Modela eventos de calor extremo con cálculos de índice de calor.",
                feature1: "Calculadora de índice de calor",
                feature2: "Evaluaciones de riesgo para la salud",
                feature3: "Análisis de estrés en la red eléctrica",
                feature4: "Tiempo de agotamiento por calor",
                button: "Iniciar Simulador"
            },
            landslide: {
                title: "Deslizamiento de Tierra",
                description: "Simula fallas de pendientes montañosas y flujos de escombros.",
                feature1: "Análisis de estabilidad de pendiente",
                feature2: "Velocidad de flujo de escombros",
                feature3: "Cálculos de distancia de recorrido",
                feature4: "Evaluación de riesgo",
                button: "Iniciar Simulador"
            }
        },
        common: {
            backButton: "Volver al Inicio",
            parameters: "Parámetros",
            damageDescription: "Descripción de Daños",
            safetyWarning: "Advertencia de Seguridad",
            expectedEffects: "Efectos Esperados",
            expectedImpact: "Impacto Esperado",
            healthImpacts: "Impactos en la Salud",
            impactEffects: "Efectos del Impacto",
            fireBehavior: "Comportamiento del Fuego",
            landslideCharacteristics: "Características del Deslizamiento",
            safetyAdvisory: "Aviso de Seguridad",
            healthAdvisory: "Aviso de Salud",
            threatAssessment: "Evaluación de Amenaza",
            tsunamiRisk: "Evaluación de Riesgo de Tsunami"
        },
        tornado: {
            title: "Simulador de Tornado",
            windSpeed: "Velocidad del Viento (mph)",
            width: "Ancho del Tornado (metros)",
            pathLength: "Longitud del Recorrido (km)",
            rotationSpeed: "Velocidad de Rotación (rpm)"
        },
        earthquake: {
            title: "Simulador de Terremoto",
            magnitude: "Magnitud",
            depth: "Profundidad (km)",
            distance: "Distancia desde el Epicentro (km)",
            duration: "Duración (segundos)",
            underwater: "Submarino (Océano/Mar)"
        },
        tsunami: {
            title: "Simulador de Tsunami",
            magnitude: "Magnitud del Terremoto Fuente",
            waterDepth: "Profundidad del Océano (metros)",
            distance: "Distancia desde la Fuente (km)",
            slope: "Pendiente Costera (grados)",
            elevation: "Elevación Costera (metros)"
        },
        flood: {
            title: "Simulador de Inundación",
            rainfall: "Intensidad de Lluvia (mm/hora)",
            duration: "Duración (horas)",
            terrain: "Pendiente del Terreno (grados)",
            drainage: "Capacidad del Sistema de Drenaje (%)",
            riverLevel: "Nivel Base del Río (metros)"
        },
        wildfire: {
            title: "Simulador de Incendio Forestal",
            temperature: "Temperatura del Aire (°C)",
            windSpeed: "Velocidad del Viento (km/h)",
            humidity: "Humedad Relativa (%)",
            fuelMoisture: "Contenido de Humedad del Combustible (%)",
            slope: "Pendiente del Terreno (grados)"
        },
        solarstorm: {
            title: "Simulador de Tormenta Solar",
            flareClass: "Clase de Llamarada Solar",
            cmeSpeed: "Velocidad de CME (km/s)",
            protonFlux: "Flujo de Protones (pfu)",
            kpIndex: "Índice Kp Geomagnético",
            duration: "Duración de la Tormenta (horas)"
        },
        meteor: {
            title: "Simulador de Impacto de Meteoro",
            diameter: "Diámetro del Meteoro (metros)",
            velocity: "Velocidad de Impacto (km/s)",
            angle: "Ángulo de Impacto (grados desde horizontal)",
            density: "Densidad del Meteoro (kg/m³)",
            altitude: "Altitud de Explosión (km)",
            waterImpact: "Impacto en Océano/Agua"
        },
        heatwave: {
            title: "Simulador de Ola de Calor",
            temperature: "Temperatura del Aire (°C)",
            humidity: "Humedad Relativa (%)",
            windSpeed: "Velocidad del Viento (km/h)",
            duration: "Duración (días consecutivos)",
            uvIndex: "Índice UV"
        },
        landslide: {
            title: "Simulador de Deslizamiento de Tierra",
            slope: "Ángulo de Pendiente (grados)",
            saturation: "Saturación del Suelo (%)",
            rainfall: "Lluvia Reciente (mm/24h)",
            cohesion: "Cohesión del Suelo (kPa)",
            vegetation: "Cobertura Vegetal (%)"
        }
    },
    ru: {
        index: {
            title: "Симуляторы Стихийных Бедствий",
            subtitle: "Испытайте и поймите силу самых разрушительных природных явлений",
            footer: "Образовательные симуляторы для понимания динамики стихийных бедствий и протоколов безопасности",
            downloadButton: "Скачать Приложение",
            downloadAlert: "Приложение скоро появится!",
            tornado: {
                title: "Торнадо",
                description: "Симулируйте мощные торнадо и поймите их разрушительную силу по шкале Фудзиты.",
                feature1: "Скорость ветра до 515 км/ч",
                feature2: "Рейтинги по шкале EF0-EF5",
                feature3: "Прогнозы повреждений",
                feature4: "Предупреждения безопасности",
                button: "Запустить Симулятор"
            },
            earthquake: {
                title: "Землетрясение",
                description: "Исследуйте сейсмическую активность от небольших толчков до катастрофических землетрясений.",
                feature1: "Магнитуда от 1.0 до 10.0",
                feature2: "Факторы глубины и расстояния",
                feature3: "Оценка риска цунами",
                feature4: "Расчеты энергии",
                button: "Запустить Симулятор"
            },
            tsunami: {
                title: "Цунами",
                description: "Наблюдайте огромную силу океанских волн, вызванных подводными землетрясениями.",
                feature1: "Высота волн до 20+ метров",
                feature2: "Данные о затоплении",
                feature3: "Прогнозы времени прибытия",
                feature4: "Анализ воздействия на побережье",
                button: "Запустить Симулятор"
            },
            flood: {
                title: "Наводнение",
                description: "Симулируйте сценарии наводнений от сильных дождей.",
                feature1: "Контроль интенсивности осадков",
                feature2: "Факторы рельефа и дренажа",
                feature3: "Прогнозы уровня воды",
                feature4: "Картирование зон эвакуации",
                button: "Запустить Симулятор"
            },
            wildfire: {
                title: "Лесной Пожар",
                description: "Испытайте поведение лесных пожаров на основе погоды, рельефа и условий топлива.",
                feature1: "Расчеты интенсивности огня",
                feature2: "Эффекты ветра и влажности",
                feature3: "Прогнозы скорости распространения",
                feature4: "Планирование эвакуации",
                button: "Запустить Симулятор"
            },
            solarstorm: {
                title: "Солнечная Буря",
                description: "Исследуйте геомагнитные бури и солнечные вспышки.",
                feature1: "Рейтинги бурь по G-шкале",
                feature2: "Симуляции КВМ и вспышек",
                feature3: "Анализ технологического воздействия",
                feature4: "Прогнозы видимости полярных сияний",
                button: "Запустить Симулятор"
            },
            meteor: {
                title: "Удар Метеорита",
                description: "Симулируйте удары астероидов и метеоритов.",
                feature1: "Расчеты энергии удара",
                feature2: "Прогнозы диаметра кратера",
                feature3: "Эффекты ударной волны и тепла",
                feature4: "Оценка уровня угрозы",
                button: "Запустить Симулятор"
            },
            heatwave: {
                title: "Тепловая Волна",
                description: "Моделируйте экстремальные жаркие события с расчетами теплового индекса.",
                feature1: "Калькулятор теплового индекса",
                feature2: "Оценки риска для здоровья",
                feature3: "Анализ нагрузки на электросеть",
                feature4: "Время теплового истощения",
                button: "Запустить Симулятор"
            },
            landslide: {
                title: "Оползень",
                description: "Симулируйте обрушения горных склонов и потоки обломков.",
                feature1: "Анализ стабильности склона",
                feature2: "Скорость потока обломков",
                feature3: "Расчеты дальности выброса",
                feature4: "Оценка риска",
                button: "Запустить Симулятор"
            }
        },
        common: {
            backButton: "Вернуться на Главную",
            parameters: "Параметры",
            damageDescription: "Описание Повреждений",
            safetyWarning: "Предупреждение Безопасности",
            expectedEffects: "Ожидаемые Эффекты",
            expectedImpact: "Ожидаемое Воздействие",
            healthImpacts: "Воздействие на Здоровье",
            impactEffects: "Эффекты Удара",
            fireBehavior: "Поведение Огня",
            landslideCharacteristics: "Характеристики Оползня",
            safetyAdvisory: "Рекомендации по Безопасности",
            healthAdvisory: "Рекомендации по Здоровью",
            threatAssessment: "Оценка Угрозы",
            tsunamiRisk: "Оценка Риска Цунами"
        },
        tornado: {
            title: "Симулятор Торнадо",
            windSpeed: "Скорость Ветра (mph)",
            width: "Ширина Торнадо (метры)",
            pathLength: "Длина Пути (км)",
            rotationSpeed: "Скорость Вращения (rpm)"
        },
        earthquake: {
            title: "Симулятор Землетрясения",
            magnitude: "Магнитуда",
            depth: "Глубина (км)",
            distance: "Расстояние от Эпицентра (км)",
            duration: "Продолжительность (секунды)",
            underwater: "Подводное (Океан/Море)"
        },
        tsunami: {
            title: "Симулятор Цунами",
            magnitude: "Магнитуда Исходного Землетрясения",
            waterDepth: "Глубина Океана (метры)",
            distance: "Расстояние от Источника (км)",
            slope: "Береговой Склон (градусы)",
            elevation: "Береговая Высота (метры)"
        },
        flood: {
            title: "Симулятор Наводнения",
            rainfall: "Интенсивность Осадков (мм/час)",
            duration: "Продолжительность (часы)",
            terrain: "Уклон Местности (градусы)",
            drainage: "Пропускная Способность Дренажа (%)",
            riverLevel: "Базовый Уровень Реки (метры)"
        },
        wildfire: {
            title: "Симулятор Лесного Пожара",
            temperature: "Температура Воздуха (°C)",
            windSpeed: "Скорость Ветра (км/ч)",
            humidity: "Относительная Влажность (%)",
            fuelMoisture: "Влажность Топлива (%)",
            slope: "Уклон Местности (градусы)"
        },
        solarstorm: {
            title: "Симулятор Солнечной Бури",
            flareClass: "Класс Солнечной Вспышки",
            cmeSpeed: "Скорость КВМ (км/с)",
            protonFlux: "Поток Протонов (pfu)",
            kpIndex: "Геомагнитный Индекс Kp",
            duration: "Продолжительность Бури (часы)"
        },
        meteor: {
            title: "Симулятор Удара Метеорита",
            diameter: "Диаметр Метеорита (метры)",
            velocity: "Скорость Удара (км/с)",
            angle: "Угол Удара (градусы от горизонтали)",
            density: "Плотность Метеорита (кг/м³)",
            altitude: "Высота Взрыва (км)",
            waterImpact: "Удар в Океан/Воду"
        },
        heatwave: {
            title: "Симулятор Тепловой Волны",
            temperature: "Температура Воздуха (°C)",
            humidity: "Относительная Влажность (%)",
            windSpeed: "Скорость Ветра (км/ч)",
            duration: "Продолжительность (дни подряд)",
            uvIndex: "УФ Индекс"
        },
        landslide: {
            title: "Симулятор Оползня",
            slope: "Угол Склона (градусы)",
            saturation: "Насыщение Почвы (%)",
            rainfall: "Недавние Осадки (мм/24ч)",
            cohesion: "Когезия Почвы (кПа)",
            vegetation: "Растительный Покров (%)"
        }
    },
    de: {
        index: {
            title: "Naturkatastrophen-Simulatoren",
            subtitle: "Erleben und verstehen Sie die Kraft der verheerendsten Naturphänomene",
            footer: "Bildungssimulationen zum Verstehen der Dynamik von Naturkatastrophen und Sicherheitsprotokollen",
            downloadButton: "App Herunterladen",
            downloadAlert: "App kommt bald!",
            tornado: {
                title: "Tornado",
                description: "Simulieren Sie mächtige Tornados und verstehen Sie ihre zerstörerische Kraft anhand der Enhanced Fujita-Skala.",
                feature1: "Windgeschwindigkeiten bis 515 km/h",
                feature2: "EF0 bis EF5 Skalenbewertungen",
                feature3: "Schadensvorhersagen",
                feature4: "Sicherheitswarnungen",
                button: "Simulator Starten"
            },
            earthquake: {
                title: "Erdbeben",
                description: "Erforschen Sie seismische Aktivität von leichten Erschütterungen bis hin zu katastrophalen Erdbeben.",
                feature1: "Magnitude 1.0 bis 10.0",
                feature2: "Tiefen- und Entfernungsfaktoren",
                feature3: "Tsunami-Risikobewertung",
                feature4: "Energieberechnungen",
                button: "Simulator Starten"
            },
            tsunami: {
                title: "Tsunami",
                description: "Erleben Sie die immense Kraft der Ozeanwellen, die durch Unterwasserbeben ausgelöst werden.",
                feature1: "Wellenhöhen bis 20+ Meter",
                feature2: "Überschwemmungsdaten",
                feature3: "Ankunftszeitvorhersagen",
                feature4: "Küstenauswirkungsanalyse",
                button: "Simulator Starten"
            },
            flood: {
                title: "Überschwemmung",
                description: "Simulieren Sie Überschwemmungsszenarien durch starke Regenfälle.",
                feature1: "Niederschlagsintensitätskontrolle",
                feature2: "Gelände- und Drainagefaktoren",
                feature3: "Wasserstandsvorhersagen",
                feature4: "Evakuierungszonenkartierung",
                button: "Simulator Starten"
            },
            wildfire: {
                title: "Waldbrand",
                description: "Erleben Sie Waldbrandverhalten basierend auf Wetter, Gelände und Brennstoffbedingungen.",
                feature1: "Feuerintensitätsberechnungen",
                feature2: "Wind- und Feuchtigkeitseffekte",
                feature3: "Ausbreitungsgeschwindigkeitsvorhersagen",
                feature4: "Evakuierungsplanung",
                button: "Simulator Starten"
            },
            solarstorm: {
                title: "Sonnensturm",
                description: "Erforschen Sie geomagnetische Stürme und Sonneneruptionen.",
                feature1: "G-Skala Sturmbewertungen",
                feature2: "KMA und Eruptionssimulationen",
                feature3: "Technologieauswirkungsanalyse",
                feature4: "Polarlichtvorhersagen",
                button: "Simulator Starten"
            },
            meteor: {
                title: "Meteoriteneinschlag",
                description: "Simulieren Sie Asteroiden- und Meteoriteneinschläge.",
                feature1: "Einschlagsenergieberechnungen",
                feature2: "Kraterdurchmesservorhersagen",
                feature3: "Stoßwellen- und Wärmeeffekte",
                feature4: "Gefahrenstufenbewertung",
                button: "Simulator Starten"
            },
            heatwave: {
                title: "Hitzewelle",
                description: "Modellieren Sie extreme Hitzeereignisse mit Hitzeindexberechnungen.",
                feature1: "Hitzeindex-Rechner",
                feature2: "Gesundheitsrisikobewertungen",
                feature3: "Stromnetzstressanalyse",
                feature4: "Hitzeerschöpfungszeit",
                button: "Simulator Starten"
            },
            landslide: {
                title: "Erdrutsch",
                description: "Simulieren Sie Berghangversagen und Schuttströme.",
                feature1: "Hangstabilitätsanalyse",
                feature2: "Schuttstromgeschwindigkeit",
                feature3: "Auslaufdistanzberechnungen",
                feature4: "Risikobewertung",
                button: "Simulator Starten"
            }
        },
        common: {
            backButton: "Zurück zur Startseite",
            parameters: "Parameter",
            damageDescription: "Schadensbeschreibung",
            safetyWarning: "Sicherheitswarnung",
            expectedEffects: "Erwartete Auswirkungen",
            expectedImpact: "Erwarteter Einfluss",
            healthImpacts: "Gesundheitsauswirkungen",
            impactEffects: "Einschlagseffekte",
            fireBehavior: "Feuerverhalten",
            landslideCharacteristics: "Erdrutschmerkmale",
            safetyAdvisory: "Sicherheitshinweis",
            healthAdvisory: "Gesundheitshinweis",
            threatAssessment: "Bedrohungsbewertung",
            tsunamiRisk: "Tsunami-Risikobewertung"
        },
        tornado: {
            title: "Tornado-Simulator",
            windSpeed: "Windgeschwindigkeit (mph)",
            width: "Tornado-Breite (Meter)",
            pathLength: "Pfadlänge (km)",
            rotationSpeed: "Rotationsgeschwindigkeit (rpm)"
        },
        earthquake: {
            title: "Erdbeben-Simulator",
            magnitude: "Magnitude",
            depth: "Tiefe (km)",
            distance: "Entfernung vom Epizentrum (km)",
            duration: "Dauer (Sekunden)",
            underwater: "Unterwasser (Ozean/Meer)"
        },
        tsunami: {
            title: "Tsunami-Simulator",
            magnitude: "Magnitude des Quellbebens",
            waterDepth: "Ozeantiefe (Meter)",
            distance: "Entfernung von der Quelle (km)",
            slope: "Küstenhang (Grad)",
            elevation: "Küstenhöhe (Meter)"
        },
        flood: {
            title: "Überschwemmungs-Simulator",
            rainfall: "Niederschlagsintensität (mm/Stunde)",
            duration: "Dauer (Stunden)",
            terrain: "Geländeneigung (Grad)",
            drainage: "Drainagekapazität (%)",
            riverLevel: "Fluss-Grundniveau (Meter)"
        },
        wildfire: {
            title: "Waldbrand-Simulator",
            temperature: "Lufttemperatur (°C)",
            windSpeed: "Windgeschwindigkeit (km/h)",
            humidity: "Relative Luftfeuchtigkeit (%)",
            fuelMoisture: "Brennstofffeuchte (%)",
            slope: "Geländeneigung (Grad)"
        },
        solarstorm: {
            title: "Sonnensturm-Simulator",
            flareClass: "Sonneneruptionsklasse",
            cmeSpeed: "KMA-Geschwindigkeit (km/s)",
            protonFlux: "Protonenfluss (pfu)",
            kpIndex: "Geomagnetischer Kp-Index",
            duration: "Sturmdauer (Stunden)"
        },
        meteor: {
            title: "Meteoriteneinschlag-Simulator",
            diameter: "Meteoritendurchmesser (Meter)",
            velocity: "Einschlagsgeschwindigkeit (km/s)",
            angle: "Einschlagswinkel (Grad von Horizontal)",
            density: "Meteoritendichte (kg/m³)",
            altitude: "Explosionshöhe (km)",
            waterImpact: "Einschlag in Ozean/Wasser"
        },
        heatwave: {
            title: "Hitzewellen-Simulator",
            temperature: "Lufttemperatur (°C)",
            humidity: "Relative Luftfeuchtigkeit (%)",
            windSpeed: "Windgeschwindigkeit (km/h)",
            duration: "Dauer (aufeinanderfolgende Tage)",
            uvIndex: "UV-Index"
        },
        landslide: {
            title: "Erdrutsch-Simulator",
            slope: "Hangwinkel (Grad)",
            saturation: "Bodensättigung (%)",
            rainfall: "Letzter Niederschlag (mm/24h)",
            cohesion: "Bodenkohäsion (kPa)",
            vegetation: "Vegetationsbedeckung (%)"
        }
    }
};

// Dynamic translations for simulator-generated content
const dynamicTranslations = {
    en: {
        tornado: {
            categories: { 'EF0': 'Light Damage', 'EF1': 'Moderate Damage', 'EF2': 'Considerable Damage', 'EF3': 'Severe Damage', 'EF4': 'Devastating Damage', 'EF5': 'Incredible Damage' },
            descriptions: {
                'EF0': 'Peels surface off roofs, mobile homes pushed or overturned, moving autos pushed off roads, attached garages may be destroyed.',
                'EF1': 'Roofs severely stripped, mobile homes overturned or badly damaged, loss of exterior doors, windows and other glass broken, small outbuildings destroyed.',
                'EF2': 'Roofs torn off well-constructed houses, foundations of frame homes shifted, large trees snapped or uprooted, light-object missiles generated, cars lifted off ground.',
                'EF3': 'Entire stories of well-constructed houses destroyed, severe damage to large buildings, trains overturned, trees debarked, heavy cars lifted and thrown.',
                'EF4': 'Well-constructed houses completely leveled, structures with weak foundations blown away, cars thrown and large missiles generated, incredible phenomena occur.',
                'EF5': 'Strong frame houses lifted off foundations and swept away, automobile-sized missiles fly through the air, trees debarked, total devastation.'
            },
            warnings: {
                'EF0': 'Take shelter immediately in a sturdy building. Go to the lowest floor, small center room, or closet. Stay away from windows.',
                'EF1': 'TAKE COVER NOW! Go to basement or interior room on lowest floor. Get under sturdy furniture and protect your head.',
                'EF2': 'DANGEROUS SITUATION! Seek shelter immediately in a reinforced structure. Mobile homes will be destroyed - evacuate to sturdy building.',
                'EF3': 'LIFE-THREATENING TORNADO! Take cover immediately in basement or interior room. Protect yourself with mattress or heavy blankets.',
                'EF4': 'EXTREMELY DANGEROUS TORNADO! This is a life-threatening situation. Seek underground shelter immediately. Above-ground structures may be completely destroyed.',
                'EF5': 'CATASTROPHIC TORNADO! Seek underground shelter NOW. This is the most dangerous tornado category. Complete destruction of most structures is likely.'
            },
            dangerLevels: { 'Low': 'Low', 'Moderate': 'Moderate', 'High': 'High', 'Very High': 'Very High', 'Extreme': 'Extreme', 'Catastrophic': 'Catastrophic' }
        },
        earthquake: {
            intensities: {
                'Not Felt': 'Not Felt',
                'Weak': 'Weak',
                'Light': 'Light',
                'Moderate': 'Moderate',
                'Strong': 'Strong',
                'Very Strong': 'Very Strong',
                'Severe': 'Severe',
                'Violent': 'Violent',
                'Extreme': 'Extreme'
            },
            warnings: {
                'Not Felt': 'No precautions needed. Earthquake not felt by most people.',
                'Weak': 'Generally not felt. No damage expected.',
                'Light': 'Felt indoors. Hanging objects may swing slightly. No significant damage.',
                'Moderate': 'Widely felt. Some dishes and windows may break. Stay alert and be prepared to take cover.',
                'Strong': 'Felt by everyone. Damage to poorly built structures. Move away from windows and heavy furniture.',
                'Very Strong': 'TAKE COVER! Considerable damage to ordinary buildings. Drop, Cover, and Hold On.',
                'Severe': 'DANGEROUS EARTHQUAKE! Serious damage to buildings. Seek shelter under sturdy furniture immediately.',
                'Violent': 'MAJOR EARTHQUAKE! Severe structural damage. Get under a table or doorway. Stay away from buildings after shaking stops.',
                'Extreme': 'CATASTROPHIC EARTHQUAKE! Widespread devastation. Seek immediate shelter. Expect major infrastructure damage and aftershocks.'
            }
        },
        tsunami: {
            categories: {
                'No Threat': 'No Threat',
                'Minor': 'Minor Threat',
                'Moderate': 'Moderate Threat',
                'Major': 'Major Threat',
                'Severe': 'Severe Threat',
                'Catastrophic': 'Catastrophic Threat'
            },
            warnings: {
                'No Threat': 'No tsunami threat. Normal coastal conditions.',
                'Minor': 'Minor tsunami threat. Stay informed and avoid low-lying coastal areas.',
                'Moderate': 'TSUNAMI WARNING! Move to higher ground immediately. Waves may cause flooding in coastal areas.',
                'Major': 'MAJOR TSUNAMI WARNING! Evacuate coastal areas NOW. Dangerous waves expected. Move inland and to higher ground.',
                'Severe': 'SEVERE TSUNAMI THREAT! Life-threatening situation. Evacuate immediately to high ground. Multiple destructive waves expected.',
                'Catastrophic': 'CATASTROPHIC TSUNAMI! Massive waves approaching. This is a life-threatening emergency. Evacuate to highest ground possible NOW!'
            }
        },
        flood: {
            categories: {
                'Nuisance': 'Nuisance Flooding',
                'Minor': 'Minor Flooding',
                'Moderate': 'Moderate Flooding',
                'Major': 'Major Flooding',
                'Severe': 'Severe Flooding',
                'Extreme': 'Extreme Flooding'
            },
            warnings: {
                'Nuisance': 'Minor water accumulation in low areas. Monitor conditions and avoid driving through water.',
                'Minor': 'Water may enter basements and low-lying areas. Move valuables to higher floors.',
                'Moderate': 'FLOOD WARNING! Significant flooding expected. Evacuate low-lying areas. Do not drive through flooded roads.',
                'Major': 'MAJOR FLOOD WARNING! Dangerous flooding. Evacuate immediately if instructed. Road closures expected.',
                'Severe': 'SEVERE FLOOD EMERGENCY! Life-threatening flooding. Evacuate to higher ground NOW. Avoid all travel.',
                'Extreme': 'CATASTROPHIC FLOODING! Massive, life-threatening flood. Evacuate immediately to highest available ground. This is an emergency situation.'
            }
        }
    },
    lt: {
        tornado: {
            categories: { 'EF0': 'Lengvi Pažeidimai', 'EF1': 'Vidutiniai Pažeidimai', 'EF2': 'Dideli Pažeidimai', 'EF3': 'Sunkūs Pažeidimai', 'EF4': 'Naikinantys Pažeidimai', 'EF5': 'Neįtikėtini Pažeidimai' },
            descriptions: {
                'EF0': 'Nulupo stogų paviršius, mobilūs namai paslinkti arba apversti, judantys automobiliai nustumti nuo kelių, garažai gali būti sunaikinti.',
                'EF1': 'Stogai smarkiai nulupta, mobilūs namai apversti arba sunkiai pažeisti, išorinės durys prarastos, langai sudaužyti, maži pastatai sunaikinti.',
                'EF2': 'Stogai nuplyšo nuo gerai pastatytų namų, rėminių namų pamatai pasislinkę, dideli medžiai nulaužti, automobiliai pakelti nuo žemės.',
                'EF3': 'Visi gerai pastatytų namų aukštai sunaikinti, dideli pastatai sunkiai pažeisti, traukiniai apversti, medžiai nulupti, sunkūs automobiliai nusviest.',
                'EF4': 'Gerai pastatyti namai visiškai sulyginti, silpnų pamatų konstrukcijos nuplautos, automobiliai nusviest, įvyksta neįtikėtini reiškiniai.',
                'EF5': 'Stiprūs rėminiai namai pakelti nuo pamatų ir nuplauti, automobilių dydžio sviediniai skrenda ore, visiška devastacija.'
            },
            warnings: {
                'EF0': 'Ieškokite prieglobsčio nedelsiant tvirtame pastate. Eikite į žemiausią aukštą. Būkite toliau nuo langų.',
                'EF1': 'SLĖPKITĖS DABAR! Eikite į rūsį ar vidinį kambarį. Pasislėpkite po tvirtais baldais ir apsaugokite galvą.',
                'EF2': 'PAVOJINGA SITUACIJA! Ieškokite prieglobsčio sutvirtintoje konstrukcijoje. Mobilūs namai bus sunaikinti - evakuokitės.',
                'EF3': 'GYVYBEI PAVOJINGAS TORNADAS! Slėpkitės rūsyje ar vidiniame kambaryje. Apsaugokite save čiužiniu.',
                'EF4': 'ITIN PAVOJINGAS TORNADAS! Tai gyvybei pavojinga situacija. Ieškokite požeminio prieglobsčio. Antžeminės konstrukcijos gali būti sunaikintos.',
                'EF5': 'KATASTROFINIS TORNADAS! Ieškokite požeminio prieglobsčio DABAR. Tikėtina visiška konstrukcijų sunaikinimas.'
            },
            dangerLevels: { 'Low': 'Žemas', 'Moderate': 'Vidutinis', 'High': 'Aukštas', 'Very High': 'Labai Aukštas', 'Extreme': 'Ekstremalus', 'Catastrophic': 'Katastrofinis' }
        },
        earthquake: {
            intensities: {
                'Not Felt': 'Nejuntamas',
                'Weak': 'Silpnas',
                'Light': 'Lengvas',
                'Moderate': 'Vidutinis',
                'Strong': 'Stiprus',
                'Very Strong': 'Labai Stiprus',
                'Severe': 'Sunkus',
                'Violent': 'Smurtingas',
                'Extreme': 'Ekstremalus'
            },
            warnings: {
                'Not Felt': 'Nereikalingos atsargumo priemonės. Dauguma žmonių drebėjimo nejaučia.',
                'Weak': 'Paprastai nejuntamas. Žalos nesitikima.',
                'Light': 'Jaučiamas patalpose. Kabantys daiktai gali lengvai supti. Reikšmingos žalos nėra.',
                'Moderate': 'Plačiai jaučiamas. Kai kurie indai ir langai gali sudužti. Būkite budrūs.',
                'Strong': 'Jaučia visi. Pažeidimai prastai pastatytiems pastatams. Pasitraukite nuo langų.',
                'Very Strong': 'SLĖPKITĖS! Dideli pažeidimai įprastiems pastatams. Pargriukite, Užsidenktite ir Laikykitės.',
                'Severe': 'PAVOJINGAS DREBĖJIMAS! Rimti pažeidimai pastatams. Slėpkitės po tvirtais baldais.',
                'Violent': 'DIDELIS DREBĖJIMAS! Sunkūs konstrukciniai pažeidimai. Slėpkitės po stalu. Po drebėjimo būkite toliau nuo pastatų.',
                'Extreme': 'KATASTROFINIS DREBĖJIMAS! Plačiai paplitusi devastacija. Ieškokite prieglobsčio. Tikėtis didelių infrastruktūros pažeidimų.'
            }
        },
        tsunami: {
            categories: {
                'No Threat': 'Nėra Grėsmės',
                'Minor': 'Nedidelė Grėsmė',
                'Moderate': 'Vidutinė Grėsmė',
                'Major': 'Didelė Grėsmė',
                'Severe': 'Sunki Grėsmė',
                'Catastrophic': 'Katastrofinė Grėsmė'
            },
            warnings: {
                'No Threat': 'Nėra cunamio grėsmės. Normalios pakrantės sąlygos.',
                'Minor': 'Nedidelė cunamio grėsmė. Būkite informuoti ir venkite žemų pakrantės vietų.',
                'Moderate': 'CUNAMIO ĮSPĖJIMAS! Kelkitės į aukštesnį lygį nedelsiant. Bangos gali sukelti potvynius pakrantėse.',
                'Major': 'DIDELIS CUNAMIO ĮSPĖJIMAS! Evakuokitės iš pakrantės DABAR. Tikimasi pavojingų bangų. Judėkite į vidų ir aukštyn.',
                'Severe': 'SUNKI CUNAMIO GRĖSMĖ! Gyvybei pavojinga situacija. Evakuokitės nedelsiant į aukštą vietą. Tikimasi kelių naikinančių bangų.',
                'Catastrophic': 'KATASTROFINIS CUNAMIS! Artėja milžiniškos bangos. Tai gyvybei pavojinga situacija. Evakuokitės į aukščiausią galimą vietą DABAR!'
            }
        },
        flood: {
            categories: {
                'Nuisance': 'Nedidelis Potvynis',
                'Minor': 'Mažas Potvynis',
                'Moderate': 'Vidutinis Potvynis',
                'Major': 'Didelis Potvynis',
                'Severe': 'Sunkus Potvynis',
                'Extreme': 'Ekstremalus Potvynis'
            },
            warnings: {
                'Nuisance': 'Nedidelis vandens kaupimasis žemose vietose. Stebėkite sąlygas ir venkite važiavimo per vandenį.',
                'Minor': 'Vanduo gali patekti į rūsius ir žemas vietas. Perkėlkite vertybes į aukštesnius aukštus.',
                'Moderate': 'POTVYNIO ĮSPĖJIMAS! Tikimasi reikšmingo potvynio. Evakuokitės iš žemų vietų. Nevažiuokite per užlietais keliais.',
                'Major': 'DIDELIS POTVYNIO ĮSPĖJIMAS! Pavojingas potvynis. Evakuokitės nedelsiant jei nurodyta. Tikimasi kelių uždarymų.',
                'Severe': 'SUNKUS POTVYNIO PAVOJUS! Gyvybei pavojingas potvynis. Evakuokitės į aukštesnį lygį DABAR. Venkite visų kelionių.',
                'Extreme': 'KATASTROFINIS POTVYNIS! Milžiniškas, gyvybei pavojingas potvynis. Evakuokitės nedelsiant į aukščiausią vietą. Tai yra avarinė situacija.'
            }
        }
    },
    es: {
        tornado: {
            categories: { 'EF0': 'Daño Leve', 'EF1': 'Daño Moderado', 'EF2': 'Daño Considerable', 'EF3': 'Daño Severo', 'EF4': 'Daño Devastador', 'EF5': 'Daño Increíble' },
            descriptions: {
                'EF0': 'Despega la superficie de los techos, casas móviles volcadas, autos empujados fuera de las carreteras, garajes pueden ser destruidos.',
                'EF1': 'Techos severamente despojados, casas móviles volcadas o gravemente dañadas, puertas exteriores perdidas, ventanas rotas.',
                'EF2': 'Techos arrancados de casas bien construidas, cimientos desplazados, árboles grandes partidos, autos levantados del suelo.',
                'EF3': 'Pisos enteros destruidos, daño severo a edificios grandes, trenes volcados, árboles descortezados, autos pesados lanzados.',
                'EF4': 'Casas completamente niveladas, estructuras con cimientos débiles voladas, autos lanzados, ocurren fenómenos increíbles.',
                'EF5': 'Casas levantadas de los cimientos y arrastradas, misiles del tamaño de automóviles vuelan, devastación total.'
            },
            warnings: {
                'EF0': 'Busque refugio inmediatamente en un edificio resistente. Vaya al piso más bajo. Aléjese de las ventanas.',
                'EF1': '¡TÓMESE COBERTURA AHORA! Vaya al sótano o habitación interior. Métase debajo de muebles resistentes.',
                'EF2': '¡SITUACIÓN PELIGROSA! Busque refugio en una estructura reforzada. Las casas móviles serán destruidas.',
                'EF3': '¡TORNADO QUE AMENAZA LA VIDA! Busque cobertura en el sótano. Protéjase con colchón o mantas pesadas.',
                'EF4': '¡TORNADO EXTREMADAMENTE PELIGROSO! Situación que amenaza la vida. Busque refugio subterráneo inmediatamente.',
                'EF5': '¡TORNADO CATASTRÓFICO! Busque refugio subterráneo AHORA. Destrucción completa de estructuras es probable.'
            },
            dangerLevels: { 'Low': 'Bajo', 'Moderate': 'Moderado', 'High': 'Alto', 'Very High': 'Muy Alto', 'Extreme': 'Extremo', 'Catastrophic': 'Catastrófico' }
        }
    },
    ru: {
        tornado: {
            categories: { 'EF0': 'Легкий Ущерб', 'EF1': 'Умеренный Ущерб', 'EF2': 'Значительный Ущерб', 'EF3': 'Тяжелый Ущерб', 'EF4': 'Разрушительный Ущерб', 'EF5': 'Невероятный Ущерб' },
            descriptions: {
                'EF0': 'Срывает поверхность крыш, мобильные дома переворачиваются, автомобили сталкиваются с дорог, гаражи могут быть разрушены.',
                'EF1': 'Крыши серьезно повреждены, мобильные дома перевернуты, потеря дверей, разбитые окна, постройки разрушены.',
                'EF2': 'Крыши сорваны с домов, фундаменты смещены, большие деревья сломаны, автомобили подняты с земли.',
                'EF3': 'Целые этажи домов разрушены, серьезное повреждение зданий, поезда перевернуты, автомобили брошены.',
                'EF4': 'Дома полностью сровнены, конструкции со слабым фундаментом снесены, автомобили брошены, невероятные явления.',
                'EF5': 'Дома подняты с фундамента и снесены, снаряды размером с автомобиль летят, полное опустошение.'
            },
            warnings: {
                'EF0': 'Немедленно укройтесь в прочном здании. Спуститесь на нижний этаж. Держитесь подальше от окон.',
                'EF1': 'УКРОЙТЕСЬ СЕЙЧАС! Спуститесь в подвал или внутреннюю комнату. Залезьте под прочную мебель.',
                'EF2': 'ОПАСНАЯ СИТУАЦИЯ! Укройтесь в укрепленной конструкции. Мобильные дома будут уничтожены.',
                'EF3': 'ОПАСНЫЙ ТОРНАДО! Укройтесь в подвале. Защитите себя матрасом или одеялами.',
                'EF4': 'ЧРЕЗВЫЧАЙНО ОПАСНЫЙ ТОРНАДО! Опасная ситуация. Ищите подземное убежище немедленно.',
                'EF5': 'КАТАСТРОФИЧЕСКИЙ ТОРНАДО! Ищите подземное убежище СЕЙЧАС. Вероятно полное разрушение структур.'
            },
            dangerLevels: { 'Low': 'Низкий', 'Moderate': 'Умеренный', 'High': 'Высокий', 'Very High': 'Очень Высокий', 'Extreme': 'Экстремальный', 'Catastrophic': 'Катастрофический' }
        }
    },
    de: {
        tornado: {
            categories: { 'EF0': 'Leichter Schaden', 'EF1': 'Mäßiger Schaden', 'EF2': 'Erheblicher Schaden', 'EF3': 'Schwerer Schaden', 'EF4': 'Verheerender Schaden', 'EF5': 'Unglaublicher Schaden' },
            descriptions: {
                'EF0': 'Schält Oberfläche von Dächern, Mobilheime umgestürzt, Autos von Straßen geschoben, Garagen können zerstört werden.',
                'EF1': 'Dächer stark abgedeckt, Mobilheime umgestürzt oder stark beschädigt, Türen verloren, Fenster zerbrochen.',
                'EF2': 'Dächer von Häusern abgerissen, Fundamente verschoben, große Bäume geknickt, Autos vom Boden gehoben.',
                'EF3': 'Ganze Stockwerke zerstört, schwere Schäden an Gebäuden, Züge umgestürzt, Autos geworfen.',
                'EF4': 'Häuser dem Erdboden gleichgemacht, schwache Strukturen weggeblasen, Autos geworfen, unglaubliche Phänomene.',
                'EF5': 'Häuser von Fundamenten gehoben und weggeschwemmt, autogroße Geschosse fliegen, totale Verwüstung.'
            },
            warnings: {
                'EF0': 'Suchen Sie sofort Schutz in einem stabilen Gebäude. Gehen Sie in die unterste Etage. Halten Sie sich von Fenstern fern.',
                'EF1': 'IN DECKUNG JETZT! Gehen Sie in den Keller oder Innenraum. Gehen Sie unter stabile Möbel.',
                'EF2': 'GEFÄHRLICHE SITUATION! Suchen Sie Schutz in verstärkter Struktur. Mobilheime werden zerstört.',
                'EF3': 'LEBENSGEFÄHRLICHER TORNADO! Suchen Sie Schutz im Keller. Schützen Sie sich mit Matratze.',
                'EF4': 'EXTREM GEFÄHRLICHER TORNADO! Lebensbedrohliche Situation. Suchen Sie sofort unterirdischen Schutz.',
                'EF5': 'KATASTROPHALER TORNADO! Suchen Sie unterirdischen Schutz JETZT. Vollständige Zerstörung ist wahrscheinlich.'
            },
            dangerLevels: { 'Low': 'Niedrig', 'Moderate': 'Mäßig', 'High': 'Hoch', 'Very High': 'Sehr Hoch', 'Extreme': 'Extrem', 'Catastrophic': 'Katastrophisch' }
        }
    }
};

// Helper function for dynamic translations
function getDynamicTranslation(simulator, category, key) {
    const lang = getLanguage();
    try {
        return dynamicTranslations[lang][simulator][category][key] || key;
    } catch (e) {
        return key;
    }
}