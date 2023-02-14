export class LocalStorageHelper {
  static getApiKey = () => {
    return localStorage.getItem("apikey");
  };

  static setApiKey = (key: string) => {
    return localStorage.setItem("apikey", key);
  };

  static deleteApiKey = () => {
    return localStorage.removeItem("apikey");
  };
}
