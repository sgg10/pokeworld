import { auth, firestore } from 'firebase'

const createUser = async (email, pass, displayName) => {
  const user = (await auth().createUserWithEmailAndPassword(email, pass)).user
  await user.updateProfile({ displayName })
  return user
}

const createPokeTrainer = user => firestore().collection('pokeTrainers').doc(user.uid).set({
  email: user.email,
  name: user.displayName,
  favorites_pokemons: [],
  teams: {}
})

const getUSer = () => auth().currentUser

const sigIn = (email, pass) => auth().signInWithEmailAndPassword(email, pass)

const signOut = () => auth().signOut()

export { createUser, createPokeTrainer, getUSer, sigIn, signOut }
