const works = [
  {
    id: 1,
    title: "Der Knoten",
    year: "2017",
    subtitle: "Koreanische Oper, Berlin, 2017",
    quote:
      "aus wessen verstorbenen Gauners zerplazten Hodensack kamst du hervor, du Geist?\nIss und geh fort, ich tu dasselbe.",
    credits: [
      "Tänzerin - Soomin Chae",
      "Musik - Dream like Fantasy by Sol Daniel Kim, Dayong Yoon",
      "Pagyeong by Hyunjhin Baik",
    ],
    poster: "/images/works/work01.jpeg",
    video: "/videos/works/work01.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 2,
    title: "Schalltropfen",
    subtitle: "Rauminstallation, \"Kommune\" RNSAD, Nancy, 2018",
    quote:
      "Die Tropfen wurden aufgezeichnet und ihrer ursprünglichen Funktion entzogen. Aus ihrem gleichförmigen Rhythmus entstand eine Komposition, die Regelmäßigkeit in Unvorhersehbarkeit übersetzt.\n\nDie Partitur liegt auf dem Lautsprecher aus, während die Komposition den Raum besetzt.",
    credits: ["Tivoli Audio Model One Radio, zwei Partituren."],
    year: "2018",
    poster: "/images/works/work02.jpeg",
    video: "/videos/works/work02.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 3,
    title: "Onomatopoetikon",
    year: "2019",
    subtitle: "Videoinstallation, hbksaar, 2019",
    quote:
      "Singt ein Lied so süß gelinde,\nWie die Quellen auf den Kieseln,\nWie die Bienen um die Linde\nSummen, murmeln, flüstern, rieseln.",
    credits: ["Einkanal-Videoprojektion, Ton"],
    poster: "/images/works/work03.jpeg",
    video: "/videos/works/work03.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 4,
    title: "Baum und Leben",
    year: "2019",
    subtitle:
      "Rauminstallation, Baum und Bild, Deutsch-Französischer Garten, Saarbrücken, 2019",
    quote:
      "aus wessen verstorbenen Gauners zerplazten Hodensack kamst du hervor, du Geist?\nIss und geh fort, ich tu dasselbe.",
    credits: [
      "Für jemanden mit nicht aufgeweichtem Geist, unangefochtenem Gewahrsein, der inneren Reichtum und Schaden aufgibt, wach ist, gibt es keine Gefahr keine Furcht. (Dhammapada 39)",
    ],
    poster: "/images/works/work04.jpeg",
    video: "/videos/works/work04.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 5,
    title: "Hausgott",
    year: "2019",
    subtitle: "Rauminstallation, \"von jetzt bis oben\" Saarbrücken, 2019",
    quote:
      "In my culture, we believe that there are gods who guard every part of the house called 가신(house god)\nthe creaks of the floor are the viality of the gods who greet us.\nthere is nothing but invisible things and sounds are always with us.",
    credits: ["Interaktive Bodeninstallation, Klang"],
    poster: "/images/works/work05.jpeg",
    video: "/videos/works/work05.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 6,
    title: "Der Knoten",
    year: "2020",
    subtitle:
      "Rauminstallation, rendezvous, deutsch-französischer Garten, Saarbrücken, 2020",
    quote:
      "Lasst uns Körper und Seele mit Wasser waschen. (Lavons-nous donc, corps et âme, avec de l’eau.)",
    credits: ["Videoprojektion, Ton"],
    poster: "/images/works/work06.jpeg",
    video: "/videos/works/work06.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 7,
    title: "Delayed Choice",
    year: "2020",
    subtitle:
      "Videoinstallation, von wegen bis weilen, Saarbrücken, 2020",
    quote:
      "Nur Schwanz und Kopf des Drachens sind gut auszumachen. Dass der Drachenschwanz in der Photonenquelle steckt, ist ebenso klar wie das Zubeißen des Drachenmauls im Detektor am Ende des Weges. Dazwischen ist nur Rauch. (John A. Wheeler, Law without Law in: Quantum Theory and Measurement, 1983)",
    credits: ["Kyung Jae Kim, Juho Lee"],
    poster: "/images/works/work07.jpeg",
    video: "/videos/works/work07.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 8,
    title: "Schlaflied",
    year: "2020",
    subtitle:
      "Rauminstallation, \"von fallen bis leuchten\" von_bis_, Saarbrücken, 2020",
    quote:
      "Nur Schwanz und Kopf des Drachens sind gut auszumachen. Dass der Drachenschwanz in der Photonenquelle steckt, ist ebenso klar wie das Zubeißen des Drachenmauls im Detektor am Ende des Weges. Dazwischen ist nur Rauch. (John A. Wheeler, Law without Law in: Quantum Theory and Measurement, 1983)",
    credits: ["Toninstallation, Licht"],
    poster: "/images/works/work08.jpeg",
    video: "/videos/works/work08.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 9,
    title: "The Rose of Sharon Blooms Again",
    year: "2021",
    subtitle: "Videoinstallation, Saarbrücken, 2021",
    quote: "Beeinflussen wir uns wirklich gegenseitig?",
    credits: ["Kyung Jae Kim, Juho Lee"],
    poster: "/images/works/work09.jpeg",
    video: "/videos/works/work09.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 10,
    title: "Irre",
    year: "2021",
    subtitle:
      "Soundinstallation, \"EXPERIMANCE FESTIVAL\", Gallery Haus, Saarbrücken, 2021",
    quote: "irre, irre, irre, unsere Irre Leere.",
    credits: ["Leinwand, Piezo-Lautsprecher, Ton"],
    poster: "/images/works/work10.jpeg",
    video: "/videos/works/work10.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 11,
    title: "Entleeren",
    year: "2021",
    subtitle:
      "Videoinstallation, \"Sollbruchstellen\", Kunsthochschule Mainz, 2021",
    quote:
      "ich werfe jeden Tag etwas von dem ab.\nWie wird man ein freier Mensch?",
    credits: ["Videoprojektion, Ton"],
    poster: "/images/works/work11.jpeg",
    video: "/videos/works/work11.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 12,
    title: "Not to Become a Rotting Corpse",
    year: "2021",
    subtitle: "Videoinstallation, Saarbrücken, 2021",
    quote:
      "Why should I keep flying? not to fall? not to become a rotting corpse?",
    credits: ["Videoprojektion, Ton"],
    poster: "/images/works/work12.jpeg",
    video: "/videos/works/work12.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
  {
    id: 13,
    title: "Being-in-the-World",
    year: "2022",
    subtitle:
      "Video und Soundinstallation, \"Particles, Informations, Existance\", Weltkulturerbe Völklinger Hütte, 2022",
    quote:
      "Je genauer wir die Welt und sich selbst untersuchen, desto mehr wird unsere Angst verstärkt. Die ‚Existenz‘ und die ‚Welt‘ ist wie eine Möbiusschleife. Es gibt kein Innen (Inside) und Außen (Outside). Mit anderen Worten, in der widersprüchlichen Struktur von der ‚Existenz‘ und der Welt, ist die Welt ein Ort ohne Orientierung und das Bewusstsein existiert in Unsicherheit. ‚Gibt es Existenzangst wegen der Welt in der wir leben?‘",
    credits: ["Videoprojektion, Lautsprecher, Metallschalen, Reis"],
    poster: "/images/works/work13.jpeg",
    video: "/videos/works/work13.mp4",
    description:
      "A visually driven short film project exploring experimental storytelling and immersive moving image.",
    previewStart: 15,
    previewEnd: 30,
  },
];

export default works;
