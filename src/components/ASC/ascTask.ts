export default class AscTask {
    static createTasks(configStatus, action) {
        let result = []
        for (let i = 0; i < configStatus.length; i++) {
            if (configStatus[i] !== undefined) {
                if (configStatus[i].action === action) {
                    result.push(configStatus[i])
                }
            }
        }
        return result
    }


    static findStatus(configStatus, findAction) {
        let result = []
        for (let i = 0; i < configStatus.length; i++) {
            if (configStatus[i] !== undefined) {
                if (configStatus[i].action === findAction) {
                    //result.push(configStatus[i])
                    result.push(i)
                }
            }
        }
        return result
    }
}