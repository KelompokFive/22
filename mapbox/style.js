
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Google_1": {
            "type": "raster",
            "tiles": ["http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1"],
            "tileSize": 256
        },
        "KIOS_2": {
            "type": "geojson",
            "data": json_KIOS_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Google_1_1",
            "type": "raster",
            "source": "Google_1"
        },
        {
            "id": "lyr_KIOS_2_0",
            "type": "circle",
            "source": "KIOS_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}