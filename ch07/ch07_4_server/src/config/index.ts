import path from 'path'

//디렉토리 구분문자를 하나의 문자열로 반환
export const getPublicDirPath = () => path.join(process.cwd(), 'public')
