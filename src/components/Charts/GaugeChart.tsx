import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

type TProps = {
  settings: {
    width: number;
    height: number;
    value: number;
    stopColor1: string;
    stopColor2: string;
  };
};

const GaugeChart: React.FC<TProps> = ({ settings }) => {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          fontWeight: "bold",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "url(#gradient)",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={settings.stopColor1} />
          <stop offset="100%" stopColor={settings.stopColor2} />
        </linearGradient>
      </defs>
    </Gauge>
  );
};

export default GaugeChart;
