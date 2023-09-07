const points = [
    {
        "name": "Papa",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/p.png",
        "positioning": "poitioned_on_top",
        "xPos": 300,
        "yPos": 300
    },
    {
        "name": "Golf",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/g.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": 100
    },
    {
        "name": "Foxtrot",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/f.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": 0
    },
    {
        "name": "Echo",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/e.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": -100
    },
    {
        "name": "Oscar",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/o.png",
        "positioning": "poitioned_on_top",
        "xPos": 300,
        "yPos": -300
    },
    {
        "name": "Tango",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/t.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": -500
    },
    {
        "name": "Uniform",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/u.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": 0
    },
    {
        "name": "India",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/i.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": 200
    },
    {
        "name": "Victor",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/v.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": 500
    },
    {
        "name": "Hotel",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/h.png",
        "positioning": "poitioned_on_top",
        "xPos": 100,
        "yPos": 200
    },
    {
        "name": "Juliett",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/j.png",
        "positioning": "poitioned_on_top",
        "xPos": -100,
        "yPos": 200
    },
    {
        "name": "Whiskey",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/w.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": 500
    },
    {
        "name": "Xray",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/x.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": 500
    },
    {
        "name": "Quebec",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/q.png",
        "positioning": "poitioned_on_top",
        "xPos": -300,
        "yPos": 300
    },
    {
        "name": "Kilo",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/k.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": 100
    },
    {
        "name": "Lima",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/l.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": 0
    },
    {
        "name": "Mike",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/m.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": -100
    },
    {
        "name": "Bravo",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/b.png",
        "positioning": "poitioned_on_top",
        "xPos": -100,
        "yPos": -200
    },
    {
        "name": "Charlie",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/c.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": -200
    },
    {
        "name": "Delta",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/d.png",
        "positioning": "poitioned_on_top",
        "xPos": 100,
        "yPos": -200
    },
    {
        "name": "Sierra",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/s.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": -500
    },
    {
        "name": "November",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/n.png",
        "positioning": "poitioned_on_top",
        "xPos": -300,
        "yPos": -300
    },
    {
        "name": "Romeo",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/r.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": -500
    },
    {
        "name": "Yankee",
        "description": "",
        "related_images" : [],
        "category": "Satellite Dishes",
        "icon": "./icons/y.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": 0
    }
]
const lines = [
    {
        "color": "black",
        "linethickness": 2,
        "coordinates": [[-690, -700], [700, -700], [700, -215], [700, -200], [700, 700], [-700, 700], [-700, -70]]
    },
    {
        "color": "black",
        "linethickness": 2,
        "coordinates": [[-700, -85], [-700, -700]]
    },
    {
        "color": "black",
        "linethickness": 2,
        "coordinates": [[700, -331.4], [695.9, -340.1], [693.5, -342.8], [690.7, -344.5], [680.3, -344.8], [675, -346.3], [659.8, -368.6], [652.6, -383], [645.6, -401.6], [638.9, -422.5], [633.7, -431.1], [623.9, -441.3], [614.7, -451.3], [607.1, -462.4], [599.7, -477.9], [591, -509.2], [589.2, -544.8], [587.7, -558.4], [581.5, -575.6], [572.4, -588.5], [570, -593], [568, -599.8], [565.3, -616.7], [562.9, -643.5], [562.5, -671.7], [563.5, -680.6], [565.3, -687], [589, -700]]
    }
]