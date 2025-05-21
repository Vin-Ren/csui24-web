
export type Reaction = {
  type: string
  count: number
}

export interface MenfessType {
  id: string;
  to: string;
  from: string;
  message: string;
  createdAt: string;
  reactions: Reaction[]
}
