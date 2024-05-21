/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0
 */
import { config, database, logger, changePanel, appdata, setStatus, pkg, popup } from '../utils.js'

class Store {
    static id = "store";   
    async init(config) {
        this.config = config;
        this.db = new database();
        document.querySelector('.settings-btn').addEventListener('click', e => changePanel('settings'))
        document.querySelector('.store-btn').addEventListener('click', e => changePanel('store'))
    }
}
export default Store;