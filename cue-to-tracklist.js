const cue = `
TRACK 01 AUDIO
    TITLE "She Is Music (Hypnogroove Mix)"
    PERFORMER "Psycatron"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Dirt (Ben Klock edit)"
    PERFORMER "Echologist"
    INDEX 01 06:00:00
  TRACK 03 AUDIO
    TITLE "Groove La Chord"
    PERFORMER "Aril Brikha"
    INDEX 01 07:57:00
  TRACK 04 AUDIO
    TITLE "MKS1 (Main Mix) (Deeply Rooted House)"
    PERFORMER "DJ Deep"
    INDEX 01 13:12:00
  TRACK 05 AUDIO
    TITLE "Belfort"
    PERFORMER "Dario Zenker"
    INDEX 01 17:35:00
  TRACK 06 AUDIO
    TITLE "The Exchange"
    PERFORMER "Stojche"
    INDEX 01 22:25:00
  TRACK 07 AUDIO
    TITLE "Into The Red"
    PERFORMER "Matt O'Brien"
    INDEX 01 26:05:00
  TRACK 08 AUDIO
    TITLE "Skyhigh"
    PERFORMER "Yan Cook"
    INDEX 01 32:37:00
  TRACK 09 AUDIO
    TITLE "Fighting The Blind Man"
    PERFORMER "Claro Intelecto"
    INDEX 01 38:28:00
  TRACK 10 AUDIO
    TITLE "Reset"
    PERFORMER "Alexander Kowalski"
    INDEX 01 43:59:00
  TRACK 11 AUDIO
    TITLE "Higher Power (Hardcore PCK Mix)"
    PERFORMER "WK7"
    INDEX 01 50:13:00
  TRACK 12 AUDIO
    TITLE "Let Go"
    PERFORMER "Marco Zenker; Dario Zenker"
    INDEX 01 53:19:00
  TRACK 13 AUDIO
    TITLE "Everything In Its Right Place (Gigamesh Remix)"
    PERFORMER "Radiohead"
    INDEX 01 55:35:00
`;

const tracklist = cue
  .replace(/\n/g, "")
  .replace(" ", "")
  .split("TRACK")
  .map((audio) => {
    const [title, artist] = audio.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
    const timestamp = audio.match(/(?:[0-9]\d):(?:[0-9]\d)/g);

    return `${timestamp} ${artist} - ${title}`;
  })
  .join("\n")
  .replace(/"/g, "");

console.log(tracklist);
