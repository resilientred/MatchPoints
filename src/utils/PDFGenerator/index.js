import pdfMake from 'pdfMake';
import Scheduler from 'utils/Scheduler';

class PDFGenerator {
  constructor(clubName, players, schema, numOfPlayers, date) {
    this.clubName = clubName;
    this.players = players;
    this.schema = schema;
    this.numOfPlayers = numOfPlayers;
    this.date = date;
  }

  static link() {
    return {
      text: 'Check your result at https://matchpoints.org/results',
      alignment: 'center',
      color: 'red',
      margin: [0, 3],
    };
  }

  static scheduleTableSkeleton(body, numOfPlayers) {
    return {
      width: 'auto',
      table: {
        headerRows: 1,
        widths: [ 'auto' ],
        body: [
          [{
            text: `${numOfPlayers} Players`,
            fontSize: 18,
            bold: true,
            alignment: 'center',
            margin: [ 0, 0, 0, 5],
          }],
          ...body
        ],
      },
      layout: {
        hLineWidth: () => {
          return 0;
        },
        vLineWidth: () => {
          return 2;
        }
      }
    };
  }

  static scheduleTable(numOfPlayers) {
    const schedule = Scheduler.findSchedule(numOfPlayers);
    const columns = [];

    let body = [];
    schedule.forEach((match, i) => {
      if (i === 12) {
        columns.push(Scheduler.scheduleTableSkeleton(body, numOfPlayers));
        body = [];
      }

      if (i % 3 === 0 && i) {
        body.push([{
          text: match,
          fontSize: 18,
          alignment: 'center',
          margin: [0, 5, 0, 0],
        }]);
      } else {
        body.push([{ text: match, fontSize: 18, alignment: 'center' }]);
      }
    });

    return columns;
  }

  header(num, pageBreak = false) {
    const header = {
      columns: [
        {
          width: 'auto',
          fontSize: 18,
          text: this.date
        },
        {
          width: '*',
          fontSize: 28,
          bold: true,
          alignment: 'center',
          text: this.clubName
        },
        {
          width: 'auto',
          fontSize: 18,
          text: `Group ${num}`
        }
      ]
    };

    if (pageBreak) {
      header.pageBreak = 'before';
    }

    return header;
  }

  body(start, numOfPlayers) {
    return {
      columns: [
        this.playerList(start, numOfPlayers),
        PDFGenerator.scheduleTable(numOfPlayers),
      ],
      margin: [0, 35],
    };
  }

  scoreBox() {

  }

  playerList(start, num) {
    return {
      width: '*',
      ol: this.players.slice(start, start + num).map(player => {
        return {
          columns: [
            {
              width: 'auto',
              text: player.name,
              bold: true,
              fontSize: 26,
            },
            {
              width: 'auto',
              text: player.rating,
              fontSize: 26
            }
          ],
          columnGap: 5,
          margin: [0, 7]
        };
      }),
      fontSize: 26,
    };
  }

  generate() {
    const content = [];
    let numAdded = 0;
    this.schema.forEach((num, i) => {
      content.push(this.header(i, true));
      content.push(PDFGenerator.link());
      content.push(this.body(numAdded, num));
      content.push(this.scoreBox());

      numAdded += num;
    });

    const docDefinition = {
      pageSize: 'LETTER',
      content,
    };

    pdfMake.createPdf(docDefinition).download();
  }
}