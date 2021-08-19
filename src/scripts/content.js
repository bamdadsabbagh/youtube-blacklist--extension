import { getIdFromHref } from '../utils/get-id-from-href'
import { getIdFromData } from '../utils/get-id-from-data'
import { executeOnHrefChange } from '../utils/execute-on-href-change'
import { getState } from '../utils/get-state'
import { injectContentPages } from '../utils/inject-content-pages'
import { purgeContentPages } from '../utils/purge-content-pages'
import { initializeState } from '../utils/initialize-state'
// import { setState } from '../utils/set-state'

const watchForIdChange = async () => {

    const idFromHref = await getIdFromHref ()
    const idFromData = await getIdFromData ()
    const shouldReload = idFromHref !== idFromData
    const state = await getState ()

    if (state.shouldReload !== shouldReload) {
        
        // await setState ('shouldReload', shouldReload)

    }

}

window.addEventListener ('load', async () => {

    await initializeState ()

    injectContentPages ()
    
    executeOnHrefChange (purgeContentPages)

    executeOnHrefChange (watchForIdChange)

})