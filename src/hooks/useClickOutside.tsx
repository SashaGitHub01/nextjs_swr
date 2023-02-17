import React, { useEffect } from "react";

type UseClickOutsideType = (el: HTMLElement, event: keyof GlobalEventHandlersEventMap, ) => void

// eslint-disable-next-line default-param-last
export const useClickOutside: UseClickOutsideType = (el, onClickOutside, eventType = "click") => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if(ignore === true) return;
      if (ignore?.length > 0) {
        const isIgnore = ignore
          .map((element) => {
            return !!element && element.contains(event.target);
          })
          .includes(true);

        if (isIgnore) return;
      }

      if (Array.isArray(el)) {
        const isTrue = el.reduce((prev, element) => {
          if (!!prev && !element) {
            return true;
          }
          return !!prev && element && !element.contains(event.target);
        }, true);

        if (isTrue) {
          onClickOutside(event);
        }
      } else if (el && !el.contains(event.target)) {
        onClickOutside(event);
      }
    };

    document.addEventListener(eventType, handleClickOutside, true);

    return () => {
      document.removeEventListener(eventType, handleClickOutside, true);
    };
  }, [el, onClickOutside, ignore]);
};