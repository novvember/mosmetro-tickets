import Field from "../types/Field";

export default function flatField(field: Field) {
  return field.slice().reverse().flat();
}
