export var option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "0",
    right: "0",
    bottom: "",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Backstein", "Daπ", "Icarus"],
  },
  series: [
    {
      name: "Am daddeln",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [53646, 86884, 15102],
    },
    {
      name: "Hat Bock zu daddeln",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [23227, 8508, 4352],
    },
  ],
};
