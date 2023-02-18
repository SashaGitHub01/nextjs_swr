import React, { useEffect } from "react";

type TargetValue<T> = T | undefined | null;
type TargetElement<T extends Element = Element> = TargetValue<T>;

export function useClickOutside<E extends Event = Event, T extends TargetElement = Element>(
  element: T,
  onClickOutside: (e: E) => void,
  eventType: keyof GlobalEventHandlersEventMap = "click",
) {
  const handleClickOutside = (event: DocumentEventMap[typeof eventType]) => {
    if (element && !element.contains(event.target as Node)) {
      onClickOutside(event as any);
    }
  };

  useEffect(() => {
    document.addEventListener(eventType, handleClickOutside, true);

    return () => {
      document.removeEventListener(eventType, handleClickOutside, true);
    };
  }, [element, onClickOutside]);
}
