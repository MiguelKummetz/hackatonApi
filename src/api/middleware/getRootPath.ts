import path from "path";

export const getRootPath = (dirname: string) => {
    return path.join(dirname, '..', '..', '..', '..');
}