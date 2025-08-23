import ImgTest from "../assets/cloudy.png";

export function ClimaCard() {
  return (
    <div className="flex flex-col items-center justify-around gap-2 w-[120px] h-[220px] p-2 bg-card rounded-3xl">
      <p className="text-lg font-semibold">Mon</p>

      <img className="size-10" src={ImgTest} alt="" />

      <p className="text-3xl font-bold">16°</p>
    </div>
  );
}
 