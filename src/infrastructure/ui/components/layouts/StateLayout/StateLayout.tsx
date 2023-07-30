import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// state
import { persistor, store } from '@/domain/store/store'

export type StateLayoutProps = {
    children: React.ReactNode
}

const StateLayout: React.FC<StateLayoutProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StateLayout
