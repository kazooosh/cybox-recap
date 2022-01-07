export var option = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Meist genutzten Emojis",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#18181b",
        borderWidth: 8,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "100",
          color: "#f4f4f5",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          name: "😂",
          value: 372,
        },
        {
          name: "😅",
          value: 222,
        },
        {
          name: "🤣",
          value: 84,
        },
        {
          name: "👀",
          value: 51,
        },
        {
          name: "🤔",
          value: 51,
        },
        {
          name: "👌🏻",
          value: 38,
        },
        {
          name: "🎉",
          value: 31,
        },
        {
          name: "🙈",
          value: 25,
        },
        {
          name: "✌🏻",
          value: 19,
        },
        {
          name: "🔥",
          value: 17,
        },
        {
          name: "👍🏻",
          value: 14,
        },
      ],
    },
  ],
};
