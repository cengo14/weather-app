const AirQualityBar = ({ airQualityIndex }) => {
  const colors = ["green", "yellow", "orange", "red", "purple"];
  const widths = [20, 40, 60, 90, 120]; // Bar genişlikleri

  return (
    <svg
      width="170"
      height="40"
      viewBox="0 0 250 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arka plan çubuğu */}
      <rect x="5" y="10" width="120" height="30" fill="#ddd" rx="10" />

      {/* Hava Kalitesi Barı */}
      <rect
        x="5"
        y="10"
        width={widths[airQualityIndex - 1]}
        height="30"
        fill={colors[airQualityIndex - 1]}
        rx="10"
      />
    </svg>
  );
};

export default AirQualityBar;
