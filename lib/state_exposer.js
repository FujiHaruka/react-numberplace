const holder = {
  setState: null,
  state: {}
}

export const exposeSetState = (self) => {
  holder.setState = self.setState
  holder.state = self.state
}

export const cancelState = () => {
  holder.setState = null
}

export const setState = (args) => {
  holder.setState(args)
}

export const getState = () => {
  return holder.state
}
