import { useState, useEffect } from "preact/hooks";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-sidebar-primary-foreground">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="text-lg lg:text-lg font-medium">
          Oferta Limitada: 20% Off Termina En
        </span>
      </div>
      <div className="flex gap-2 text-center xl:mt-4">
        <div className="bg-black text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold ">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs uppercase">Horas</div>
        </div>
        <div className="text-xl font-bold pt-2">:</div>
        <div className="bg-black text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs uppercase">Minutos</div>
        </div>
        <div className="text-xl font-bold pt-2">:</div>
        <div className="bg-black text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs uppercase">Segundos</div>
        </div>
      </div>
    </div>
  );
}
