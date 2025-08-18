import ImgTest from "../assets/cloudy.png";

export function OtherPlaceClimaCard() {
  return (
    <div className="flex items-center justify-between p-6 rounded-md w-full h-[120px] bg-muted-foreground/10">
      <div className="flex flex-col gap-2">
        <p>US</p>

        <p>California</p>

        <p>Ensolarado</p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <img className="size-10" src={ImgTest} alt="" />

        <p className="font-bold text-lg">16°</p>
      </div>
    </div>
  );
}
