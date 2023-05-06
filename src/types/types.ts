export type TProject = {
  id: number,
  name: string,
  timestamp: number,
  weight: number,
  open: boolean
}

export type TUser = {
  id: number,
  name: string,
  email: string,
  isAdmin: boolean
}

export type TEvaluation = {
  id: number,
  userId: number,
  projectId: number,
  author: number,
  timestamp: number,
  value: number,
  comment: string,
  projectName?: string
}

export type TProjectUser = {
  userId: number,
  projectId: number
}