
export interface IColumn {
    events:[],
    setEvents: React.Dispatch<React.SetStateAction<object>>
    currentEvent:{
      title:string
    }
    tag:string
  }