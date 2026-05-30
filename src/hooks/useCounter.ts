import { useEffect, useState } from 'react';

export function useCounter(target: number, active = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 70;
    const timer = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / total));
      if (frame >= total) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [target, active]);

  return value;
}
