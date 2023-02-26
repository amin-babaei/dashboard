interface Info {
    count: number
    pages: number
  }

interface Character {
  id: string
  name: string
  status: string
  gender: string
  image: string
}

export interface CharactersResponse {
  characters: {
    info: Info
    results: Character[]
  }
}