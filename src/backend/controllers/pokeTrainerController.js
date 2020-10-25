import { createUser, createPokeTrainer, getUSer, signOut, sigIn } from '../models/pokeTrainer'

const createNewPokeTrainer = async (email, pass, displayName) => {
  const user = await createUser(email, pass, displayName)
  await createPokeTrainer(user)
}

const getCurrentUser = () => getUSer()

const login = async (email, pass) => (await sigIn(email, pass)).user

const logout = async () => await signOut()

export { createNewPokeTrainer, getCurrentUser, login, logout }
