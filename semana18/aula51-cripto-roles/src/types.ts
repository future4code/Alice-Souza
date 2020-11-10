export enum USER_ROLES {
  NORMAL = "Normal",
  ADMIN = "Admin"
}

export type User = {
  id: string,
  name: string,
  nickname: string,
  email: string,
  password: string,
  role: USER_ROLES
}