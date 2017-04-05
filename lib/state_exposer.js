let holder = null

export const exposeSetState = (self) => {
  holder = self
  console.log('hoge')
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
