export var option = {
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    show: false,
    min: 2000,
    max: 200000,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "Verschwendete Lebenszeit",
      type: "pie",
      radius: "80%",
      center: ["50%", "50%"],
      data: [
        { value: 99894, name: "kazoosh", itemStyle: { color: "#5470c6" } },
        { value: 78376, name: "Daπ", itemStyle: { color: "#91cc75" } },
        { value: 66111, name: "Key.Fantasy", itemStyle: { color: "#fac858" } },
        { value: 60727, name: "Eulos", itemStyle: { color: "#ee6666" } },
        { value: 53646, name: "Backstein", itemStyle: { color: "#73c0de" } },
        { value: 27531, name: "MrShmeckles", itemStyle: { color: "#fc8452" } },
        { value: 24861, name: "druviaq", itemStyle: { color: "#9a60b4" } },
        { value: 21937, name: "Hexcythe", itemStyle: { color: "#ea7ccc" } },
        { value: 12337, name: "Prime", itemStyle: { color: "#5470c6" } },
        { value: 11723, name: "Xen", itemStyle: { color: "#91cc75" } },
        { value: 11212, name: "Rauchbär", itemStyle: { color: "#fac858" } },
        { value: 10750, name: "Icarus", itemStyle: { color: "#ee6666" } },
        { value: 7531, name: "Finja", itemStyle: { color: "#73c0de" } },
        { value: 6914, name: "Axcel", itemStyle: { color: "#9a60b4" } },
        { value: 6713, name: "SpartanS545", itemStyle: { color: "#ea7ccc" } },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};
