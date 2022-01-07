// import css
import "/assets/css/style.css";

// apache echarts
import * as echarts from "echarts";
import { option as residentsleeperOption } from "./assets/js/residentsleeper";
import { option as whatsappOption } from "./assets/js/whatsapp";
import { option as piechartOption } from "./assets/js/piechart";
import { option as emoteOption } from "./assets/js/emote";
import { option as dailyminutesOption } from "./assets/js/dailyminutes";

const charts = [
  { name: "residentsleeper", option: residentsleeperOption },
  { name: "whatsapp", option: whatsappOption },
  { name: "piechart", option: piechartOption },
  { name: "emote", option: emoteOption },
  { name: "dailyminutes", option: dailyminutesOption },
];

for (let x in charts) {
  let chartDom = document.getElementById(charts[x].name);
  let myChart = echarts.init(chartDom);
  charts[x].option && myChart.setOption(charts[x].option);
}

// other funcs
import { countup } from "./assets/js/countup";
import { daniel } from "./assets/js/daniel";

countup();
daniel();
