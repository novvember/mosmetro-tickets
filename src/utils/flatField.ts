import Field from "../types/GlobalField";

export default function flatField(field: Field) {
  return field.slice().reverse().flat();
}
