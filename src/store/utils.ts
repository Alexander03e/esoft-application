import { StateCreator, create as _create } from "zustand"

const storeResetFunctionsSet = new Set<() => void>()

export const create = (<T>() => {
    return (stateCreator: StateCreator<T>) => {
        const store = _create(stateCreator)

        const initialState = store.getInitialState()

        const resetStore = () => {
            store.setState(initialState)
        }

        storeResetFunctionsSet.add(resetStore)

        return store
    }
}) as typeof _create

export const resetAllStores = () => {
    storeResetFunctionsSet.forEach(func => func())
}