interface User {
  id: string,
  name: string,
  email: string
}

interface IGame {
  id: string,
  name:string,
  intro_text:string,
  farewell_text:string,
  time: number
}

interface ILaunchedGame {
  volume: boolean,
  score: number,
  gameActive: boolean
  finished: boolean
}