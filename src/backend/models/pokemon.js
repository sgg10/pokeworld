import { firestore } from 'firebase'

const update = (id, data) => firestore().collection('pokeTrainers').doc(id).update(data)

const getPokeTrainerData = id => firestore().collection('pokeTrainers').doc(id).get()

export { update, getPokeTrainerData }
