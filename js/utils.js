let tableEl = document.getElementById("tabla");

let data = `{
    "salidas" : [ 
      {
        "Lugar ": "Dique ",
        "Compania ": "Solos ",
        "Duracion ": "3:00 Hs. ",
        "Colacion ": "Mates y galletitas "
    },
    {
        "Lugar ": "Parque ",
        "Compania ": "Lau ",
        "Duracion ": "2:00 Hs. ",
        "Colacion ": "Mates y facturas "
    },
    {
      "Lugar ": "Cerrito ",
      "Compania ": "Lau y Kah ",
      "Duracion ": "1:30 Hs. ",
      "Colacion ": "Jugo y galletitas"
    },
    {
      "Lugar ": "El quijote ",
      "Compania ": "Solos ",
      "Duracion ": "4:00 Hs. ",
      "Colacion ": "Mates y sanguchitos "
    }
    ]
  }
  `
  let dataParseada = JSON.parse(data);
  let clavesSalidas= Object.keys(dataParseada.salidas[0]);
  