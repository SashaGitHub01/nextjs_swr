import { pluralize } from "@src/utils/pluralize";

export const MESSAGES = {
  required: "Обязательное поле",
  email: "Некорректный формат email",
  minLength: (length: number) => {
    const word = pluralize(length, "символов", "символ", "символа", "символов");
    return `Минимальная длина - ${length} ${word}`;
  },
};
