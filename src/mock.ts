import { TEvaluation, TProject, TProjectUser, TUser } from "./types/types"

export const mockProjects: TProject[] = [
  { "id": 1, "timestamp": 1683187193184, "name": "Some Project", "weight": 1, "open": true },
  { "id": 2, "timestamp": 1682181196184, "name": "Some Other Project", "weight": 2, "open": true }
]

export const mockUsers: TUser[] = [
  { "id": 1, "name": "Wojciech Kochanowski", "email": "wojkoch3620@gmail.com", isAdmin: true },
  { "id": 2, "name": "Test User", "email": "pt9875447@gmail.com", isAdmin: false }
]

export const mockProjectUsers: TProjectUser[] = [
  { "userId": 1, "projectId": 1 }
]

export const mockEvaluations: TEvaluation[] = [
  { "id": 1, "userId": 1, "projectId": 1, "author": 1, "timestamp": 1683187212878, "value": 4, "comment": "lorem ipsum" }
]

