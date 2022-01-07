export var option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "0",
    right: "0",
    bottom: "0",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "kazoosh",
        "Daπ",
        "Key.Fantasy",
        "Eulos",
        "Backstein",
        "druviaq",
        "Icarus",
        "Vivien",
        "Simon",
        "Andreas",
        "Markus",
      ],
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Nachrichten",
      type: "bar",
      barWidth: "60%",
      data: [
        {
          value: 435,
          itemStyle: { color: "#5470c6" },
        },
        {
          value: 411,
          itemStyle: { color: "#91cc75" },
        },
        {
          value: 537,
          itemStyle: { color: "#fac858" },
        },
        {
          value: 287,
          itemStyle: { color: "#ee6666" },
        },
        {
          value: 456,
          itemStyle: { color: "#73c0de" },
        },
        {
          value: 429,
          itemStyle: { color: "#fc8452" },
        },
        {
          value: 123,
          itemStyle: { color: "#9a60b4" },
        },
        {
          value: 243,
          itemStyle: { color: "#ea7ccc" },
        },
        {
          value: 127,
          itemStyle: { color: "#5470c6" },
        },
        {
          value: 256,
          itemStyle: { color: "#91cc75" },
        },
        {
          value: 170,
          itemStyle: { color: "#fac858" },
        },
      ],
      seriesLayoutBy: "row",
    },
  ],
};
