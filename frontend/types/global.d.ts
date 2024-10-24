export interface IRole {
  id?: string | number
  name?: string
}

export interface IUser {
  id?: string | number
  name?: string
  email?: string
  key?: string
  role?: IRole
  created_at?: string
  updated_at?: string
}

export interface IAuthStore {
  user: iUser | null
  token: string | null
}

export interface IAuth {
  isAuth: boolean
}

export interface rolesSelect {
  id: string | number
  name: string
  display_name: string
}


interface IPaginate {
  links: {
    next_page_url: string,
    prev_page_url: string,
    per_page: number,
    total_count: number,
    total_pages: number,
  }
}

export interface IDataUser extends IPaginate {
  data: iUser[]
}

export interface INavHeader {
  id: number
  title: string
  icon: string
  class: string
  containerClass: string
  liClass: string
  message?: string
  placeholder?: string
  children?: any
}

export type charPie = numbers[]

export type labelsCharPie = ["Muy Bueno", "Bueno", "Malo", "Muy Malo"]

export interface IpieData {
  data: charPie
  labels: labelsCharPie
}