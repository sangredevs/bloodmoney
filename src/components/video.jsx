export const Video = () => (
  <div
    style={{ position: "fixed", zIndex: "-1", height: "100%", width: "auto" }}>
    <video
      muted
      loop
      autoPlay
      style={{ objectFit: "cover", height: "100%", width: "auto" }}>
      <source src="./pandora.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
