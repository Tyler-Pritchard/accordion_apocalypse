import { baseUrl } from "../app/shared/baseUrl"

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        console.log(baseUrl);
        return {
            ...item,
            image: baseUrl + item.image
        }
    })
}