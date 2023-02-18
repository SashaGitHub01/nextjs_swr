/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

import { IS_CLIENT } from "@src/constants/isClient";

const checkIsClient = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    if (IS_CLIENT) {
      return original.apply(this, args);
    }
  };
};

export class LocalStorageHelper {
  @checkIsClient
  static getApiKey() {
    return localStorage.getItem("apikey");
  }

  @checkIsClient
  static setApiKey(key: string) {
    return localStorage.setItem("apikey", key);
  }

  @checkIsClient
  static deleteApiKey() {
    return localStorage.removeItem("apikey");
  }
}
