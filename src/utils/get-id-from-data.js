import { ID_DIV } from './constants'

/**
 * @description scope: extension
 * @returns {Promise<string>} video id
 */
export function getIdFromData () {

    const retry = (fn) => setTimeout (fn, 500)

    const execute = (resolve) => {

        try {

            const node = document.getElementById (ID_DIV)

            if (node === null) return retry (() => execute (resolve))

            return resolve (node.innerHTML)

        } catch {

            return retry (() => execute (resolve))

        }

    }

    return new Promise ((resolve) => execute (resolve))

}