// static.js - Static UI translations (English only)

const translations = {
    en: {
        index: {
            title: "Natural Disaster Simulators",
            subtitle: "Experience and understand the power of nature's most devastating phenomena",
            footer: "Educational simulators for understanding natural disaster dynamics and safety protocols",
            downloadButton: "Download",
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
            rotationSpeed: "Rotation Speed (rpm)",
            pressureDrop: "Pressure Drop",
            duration: "Duration",
            dangerLevel: "Danger Level",
            debrisField: "Debris Field"
        },
        earthquake: {
            title: "Earthquake Simulator",
            magnitude: "Magnitude",
            depth: "Depth (km)",
            distance: "Distance from Epicenter (km)",
            duration: "Duration (seconds)",
            underwater: "Underwater (Ocean/Sea)",
            mercalliIntensity: "Mercalli Intensity",
            feltRadius: "Felt Radius",
            peakGroundAccel: "Peak Ground Accel.",
            aftershockEstimate: "Aftershock Estimate",
            ruptureLength: "Fault Rupture Length",
            tntEquivalent: "TNT Equivalent"
        },
        tsunami: {
            title: "Tsunami Simulator",
            magnitude: "Source Earthquake Magnitude",
            waterDepth: "Ocean Depth (meters)",
            distance: "Distance from Source (km)",
            slope: "Coastal Slope (degrees)",
            elevation: "Coastal Elevation (meters)",
            wavePeriod: "Wave Period",
            waveSpeed: "Wave Speed",
            arrivalTime: "Arrival Time",
            runupHeight: "Runup Height",
            inundationDistance: "Inundation Distance",
            impactForce: "Impact Force"
        },
        flood: {
            title: "Flood Simulator",
            rainfall: "Rainfall Intensity (mm/hour)",
            duration: "Duration (hours)",
            terrain: "Terrain Slope (degrees)",
            drainage: "Drainage System Capacity (%)",
            riverLevel: "River Base Level (meters)",
            waterLevel: "Water Level",
            floodExtent: "Flood Extent",
            flowVelocity: "Flow Velocity",
            peakTime: "Peak Time"
        },
        wildfire: {
            title: "Wildfire Simulator",
            temperature: "Air Temperature (°C)",
            windSpeed: "Wind Speed (km/h)",
            humidity: "Relative Humidity (%)",
            fuelMoisture: "Fuel Moisture Content (%)",
            slope: "Terrain Slope (degrees)",
            rateOfSpread: "Rate of Spread",
            flameLength: "Flame Length",
            firelineIntensity: "Fireline Intensity",
            spottingDistance: "Spotting Distance"
        },
        solarstorm: {
            title: "Solar Storm Simulator",
            flareClass: "Solar Flare Class",
            cmeSpeed: "CME Speed (km/s)",
            protonFlux: "Proton Flux (pfu)",
            kpIndex: "Geomagnetic Kp Index",
            duration: "Storm Duration (hours)",
            powerGridRisk: "Power Grid Risk",
            satelliteRisk: "Satellite Risk",
            radioBlackout: "Radio Blackout",
            auroraLatitude: "Aurora Latitude"
        },
        meteor: {
            title: "Meteor Impact Simulator",
            diameter: "Meteor Diameter (meters)",
            velocity: "Impact Velocity (km/s)",
            angle: "Impact Angle (degrees from horizontal)",
            density: "Meteor Density (kg/m³)",
            altitude: "Explosion Altitude (km)",
            waterImpact: "Impact in Ocean/Water",
            kineticEnergy: "Kinetic Energy",
            fireballRadius: "Fireball Radius",
            shockwaveRadius: "Shockwave Radius",
            thermalRadiation: "Thermal Radiation"
        },
        heatwave: {
            title: "Heatwave Simulator",
            temperature: "Air Temperature (°C)",
            humidity: "Relative Humidity (%)",
            windSpeed: "Wind Speed (km/h)",
            duration: "Duration (consecutive days)",
            uvIndex: "UV Index",
            heatIndex: "Heat Index",
            riskCategory: "Risk Category",
            hydrationNeed: "Hydration Need",
            powerDemand: "Power Demand"
        },
        landslide: {
            title: "Landslide Simulator",
            slope: "Slope Angle (degrees)",
            saturation: "Soil Saturation (%)",
            rainfall: "Recent Rainfall (mm/24h)",
            cohesion: "Soil Cohesion (kPa)",
            vegetation: "Vegetation Cover (%)",
            safetyFactor: "Safety Factor",
            slideVelocity: "Slide Velocity",
            runoutDistance: "Runout Distance",
            debrisVolume: "Debris Volume"
        }
    }
};