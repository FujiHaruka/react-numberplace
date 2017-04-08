let holder = null

export const exposeSetState = (self) => {
  holder = self
}

export const cancelState = () => {
  holder = null
}

export const setState = (args) => {
  // if (args.history) {
  //   console.log(args.history.toJS())
  // }
  holder.setState(args)
}

export const getState = () => {
  return holder.state
}
