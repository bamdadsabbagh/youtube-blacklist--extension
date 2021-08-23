import { isPageResults } from '../utils/is-page-results'
import { appendData } from '../utils/append-data'
import { CHANNEL_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { parseStaticDataResults } from '../utils/parse-static-data-results'

(() => {

    setInterval (() => {

        if (!isPageResults (window.location.href)) return

        const data = parseStaticDataResults ()

        appendData ({
            data,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }, INTERVAL)

}) ()