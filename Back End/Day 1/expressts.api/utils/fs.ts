import fs from 'fs' ;
export const read = (): any => {
    return JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'))
}

export const write = (findAllUsers: {}): any => {
    fs.writeFileSync('./database/db.json', JSON.stringify(findAllUsers))
}