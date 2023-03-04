import { Dispatch } from "react"

export interface IColumn {
    events:[],
    setEvents: Dispatch<React.SetStateAction<void>>
    currentEvent:{
      title:string
    }
    tag:string
  }