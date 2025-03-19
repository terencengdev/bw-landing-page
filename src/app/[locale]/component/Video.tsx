interface VideoProp {
  source: string;
  autoplay?: true | false;
  loop?: true | false;
  classname: string;
}
export default function Video({
  source,
  autoplay = true,
  loop = false,
  classname,
}: VideoProp) {
  return (
    <video autoPlay={autoplay} loop={loop} className={classname}>
      <source src={source} type="video/mp4" />
    </video>
  );
}
