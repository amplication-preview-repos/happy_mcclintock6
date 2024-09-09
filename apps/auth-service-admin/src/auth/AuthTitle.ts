import { Auth as TAuth } from "../api/auth/Auth";

export const AUTH_TITLE_FIELD = "id";

export const AuthTitle = (record: TAuth): string => {
  return record.id?.toString() || String(record.id);
};
