let holder = null

export const exposeSetState = (self) => {
  holder = self
}

export const cancelState = () => {
  holder = null
}

export const setState = (args) => {
  holder.setState(args)
}

export const getState = () => {
  return holder.state
}
